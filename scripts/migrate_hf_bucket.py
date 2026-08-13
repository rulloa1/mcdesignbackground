import os
from huggingface_hub import HfFileSystem
from tqdm import tqdm
from concurrent.futures import ThreadPoolExecutor

TOKEN = "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"
BUCKET_ID = "roryulloa88/bucket1"
TARGET_DIR = "projects/assets"

def main():
    print(f"Connecting to Hugging Face bucket: {BUCKET_ID}...")
    
    if not os.path.exists(TARGET_DIR):
        os.makedirs(TARGET_DIR)
        print(f"Created directory: {TARGET_DIR}")

    try:
        fs = HfFileSystem(token=TOKEN)
        bucket_prefix = f"buckets/{BUCKET_ID}"
        
        print(f"Listing files in {bucket_prefix}...")
        all_files = fs.ls(bucket_prefix, recursive=True, detail=True)
        
        # Filter for images
        image_files = [f for f in all_files if f['name'].lower().endswith(('.webp', '.jpg', '.jpeg', '.png'))]
        print(f"Found {len(image_files)} image files.")

        def download_one(f_info):
            remote_path = f_info['name']
            filename = os.path.basename(remote_path)
            local_path = os.path.join(TARGET_DIR, filename)
            
            try:
                # Manual download with chunks to ensure data is written
                with fs.open(remote_path, "rb") as remote_file:
                    with open(local_path, "wb") as local_file:
                        while True:
                            chunk = remote_file.read(1024 * 1024) # 1MB chunk
                            if not chunk:
                                break
                            local_file.write(chunk)
                
                # Verify file size
                if os.path.getsize(local_path) == 0:
                    return f"Warning: {filename} is 0 bytes"
                return None
            except Exception as e:
                if os.path.exists(local_path):
                    os.remove(local_path)
                return f"Error downloading {remote_path}: {e}"

        # Download files in parallel
        print(f"Starting parallel download with 8 threads...")
        with ThreadPoolExecutor(max_workers=8) as executor:
            # Use list() to consume the iterator and wait for results
            results = list(tqdm(executor.map(download_one, image_files), total=len(image_files), desc="Downloading assets"))
            
        # Report errors
        errors = [r for r in results if r is not None]
        if errors:
            print(f"\nCompleted with {len(errors)} errors.")
            for err in errors[:5]: # Show first 5 errors
                print(err)
        else:
            print("\nMigration complete with no errors!")

        print("\nMigration complete!")
        print(f"Files are located in: {os.path.abspath(TARGET_DIR)}")

    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()
