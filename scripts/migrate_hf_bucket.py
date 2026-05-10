import os
from huggingface_hub import HfFileSystem
from tqdm import tqdm

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

        # Download each file
        for f_info in tqdm(image_files, desc="Downloading assets"):
            remote_path = f_info['name']
            filename = os.path.basename(remote_path)
            local_path = os.path.join(TARGET_DIR, filename)
            
            try:
                # Download using fs.get or fs.open
                # fs.get(remote_path, local_path) is usually best for files
                fs.get(remote_path, local_path)
            except Exception as e:
                print(f"\nError downloading {remote_path}: {e}")

        print("\nMigration complete!")
        print(f"Files are located in: {os.path.abspath(TARGET_DIR)}")

    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()
