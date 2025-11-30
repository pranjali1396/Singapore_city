const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const INPUT_IMAGE = path.join(__dirname, '../public/media/Phase 1/Photos and Videos_/city1.jpg');
const OUTPUT_DIR = path.dirname(INPUT_IMAGE);

const SIZES = {
    desktop: 1920,
    tablet: 1024,
    mobile: 640,
};

async function generateResponsiveImages() {
    try {
        if (!fs.existsSync(INPUT_IMAGE)) {
            console.error(`Input image not found: ${INPUT_IMAGE}`);
            process.exit(1);
        }

        console.log(`Processing: ${INPUT_IMAGE}`);

        for (const [device, width] of Object.entries(SIZES)) {
            const filename = path.basename(INPUT_IMAGE, path.extname(INPUT_IMAGE));
            const ext = path.extname(INPUT_IMAGE);
            const outputPath = path.join(OUTPUT_DIR, `${filename}-${device}${ext}`);

            await sharp(INPUT_IMAGE)
                .resize({ width })
                .toFile(outputPath);

            console.log(`Generated ${device} image: ${outputPath}`);
        }

        console.log('Done!');
    } catch (error) {
        console.error('Error generating images:', error);
        process.exit(1);
    }
}

generateResponsiveImages();
