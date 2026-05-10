import os
import re

TARGET_DIR = "projects/assets"

def main():
    if not os.path.exists(TARGET_DIR):
        print(f"Directory not found: {TARGET_DIR}")
        return

    files = os.listdir(TARGET_DIR)
    renamed_count = 0

    for filename in files:
        # Check for spaces or parentheses
        if " " in filename or "(" in filename or ")" in filename or "_" in filename:
            # New name: lower case, replace spaces/parens/underscores with hyphens
            new_name = filename.lower()
            new_name = new_name.replace(" ", "-")
            new_name = new_name.replace("_", "-")
            new_name = new_name.replace("(", "")
            new_name = new_name.replace(")", "")
            # Replace multiple hyphens with one
            new_name = re.sub(r'-+', '-', new_name)
            
            old_path = os.path.join(TARGET_DIR, filename)
            new_path = os.path.join(TARGET_DIR, new_name)
            
            if old_path != new_path:
                try:
                    # If target exists, remove it first (usually the same file being renamed)
                    if os.path.exists(new_path) and old_path.lower() != new_path.lower():
                        print(f"Target already exists: {new_name}, skipping.")
                        continue
                    
                    os.rename(old_path, new_path)
                    print(f"Renamed: '{filename}' -> '{new_name}'")
                    renamed_count += 1
                except Exception as e:
                    print(f"Error renaming {filename}: {e}")

    print(f"\nCleanup complete. Renamed {renamed_count} files.")

if __name__ == "__main__":
    main()
