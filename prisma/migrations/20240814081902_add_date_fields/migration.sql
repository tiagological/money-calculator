/*
  Warnings:

  - Added the required column `created_at` to the `Rate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Rate` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Rate" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "base_currency" TEXT NOT NULL,
    "target_currency" TEXT NOT NULL,
    "rate" REAL NOT NULL,
    "created_at" DATETIME NOT NULL,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_Rate" ("base_currency", "id", "rate", "target_currency") SELECT "base_currency", "id", "rate", "target_currency" FROM "Rate";
DROP TABLE "Rate";
ALTER TABLE "new_Rate" RENAME TO "Rate";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
