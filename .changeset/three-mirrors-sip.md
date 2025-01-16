---
'@skeletonlabs/skeleton-cli': patch
---

Feature (migrate/skeleton-3): All file transformations are batched to write to disk at the end of the migration, this will prevent any files being written to disk if any of the file transformations fail.
