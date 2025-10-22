-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Blogs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "excerpt" TEXT,
    "content" TEXT NOT NULL,
    "contentType" TEXT NOT NULL DEFAULT 'markdown',
    "published" BOOLEAN NOT NULL DEFAULT false,
    "category" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "featuredImage" TEXT,
    "readingTimeMinutes" INTEGER NOT NULL DEFAULT 1,
    "labels" TEXT NOT NULL DEFAULT '[]',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Blogs" ("author", "category", "content", "createdAt", "excerpt", "id", "labels", "published", "readingTimeMinutes", "slug", "title", "updatedAt") SELECT "author", "category", "content", "createdAt", "excerpt", "id", "labels", "published", "readingTimeMinutes", "slug", "title", "updatedAt" FROM "Blogs";
DROP TABLE "Blogs";
ALTER TABLE "new_Blogs" RENAME TO "Blogs";
CREATE UNIQUE INDEX "Blogs_slug_key" ON "Blogs"("slug");
CREATE INDEX "Blogs_slug_idx" ON "Blogs"("slug");
CREATE INDEX "Blogs_published_createdAt_idx" ON "Blogs"("published", "createdAt");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
