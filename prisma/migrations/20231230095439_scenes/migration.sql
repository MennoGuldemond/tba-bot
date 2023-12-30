-- CreateTable
CREATE TABLE `Scene` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `text` VARCHAR(2000) NOT NULL,
    `options` VARCHAR(191) NOT NULL,
    `imagePath` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
