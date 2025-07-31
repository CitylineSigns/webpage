#!/bin/bash

# Image Optimization Script for Cityline Signs Website
# This script optimizes all images in the photos folder for web use

echo "Starting image optimization for Cityline Signs website..."

# Create optimized directory
mkdir -p photos/optimized

# Function to optimize image
optimize_image() {
    local input_file="$1"
    local output_file="photos/optimized/$(basename "$input_file")"
    
    echo "Optimizing: $(basename "$input_file")"
    
    # Get original file size
    original_size=$(stat -f%z "$input_file")
    original_size_mb=$(echo "scale=2; $original_size / 1024 / 1024" | bc -l 2>/dev/null || echo "0")
    
    # Optimize image using sips
    # -Z 1200: Resize to max 1200px (maintains aspect ratio)
    # -s format jpeg: Convert to JPEG format
    # -s formatOptions 80: Set JPEG quality to 80%
    sips -Z 1200 -s format jpeg -s formatOptions 80 "$input_file" --out "$output_file" > /dev/null 2>&1
    
    # Get optimized file size
    optimized_size=$(stat -f%z "$output_file" 2>/dev/null || echo "0")
    optimized_size_mb=$(echo "scale=2; $optimized_size / 1024 / 1024" | bc -l 2>/dev/null || echo "0")
    
    # Calculate savings
    if [ "$original_size" -gt 0 ] && [ "$optimized_size" -gt 0 ]; then
        savings_percent=$(echo "scale=1; (($original_size - $optimized_size) / $original_size) * 100" | bc -l 2>/dev/null || echo "0")
        echo "  Original: ${original_size_mb}MB → Optimized: ${optimized_size_mb}MB (${savings_percent}% smaller)"
    else
        echo "  Optimization completed"
    fi
}

# Process all JPEG images
for file in photos/*.jpeg photos/*.jpg; do
    if [ -f "$file" ]; then
        optimize_image "$file"
    fi
done

# Process all PNG images (convert to JPEG for web)
for file in photos/*.png; do
    if [ -f "$file" ]; then
        echo "Converting PNG to optimized JPEG: $(basename "$file")"
        output_file="photos/optimized/$(basename "$file" .png).jpeg"
        sips -Z 1200 -s format jpeg -s formatOptions 80 "$file" --out "$output_file" > /dev/null 2>&1
    fi
done

echo ""
echo "Image optimization complete!"
echo "Optimized images are saved in: photos/optimized/"
echo ""
echo "Summary of optimizations:"
echo "- Resized to max 1200px width/height (maintains aspect ratio)"
echo "- Converted to JPEG format with 80% quality"
echo "- PNG files converted to JPEG for better web compatibility"
echo "- All images optimized for web loading speed"
echo ""
echo "Next steps:"
echo "1. Review the optimized images in photos/optimized/"
echo "2. Update your HTML files to use the optimized images"
echo "3. Test the website loading speed improvement" 