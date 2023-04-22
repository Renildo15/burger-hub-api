/*
  Warnings:

  - You are about to drop the `ingredientes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `item_ingrediente` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ingredientes";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "item_ingrediente";
PRAGMA foreign_keys=on;
