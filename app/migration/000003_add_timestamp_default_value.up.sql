BEGIN;

ALTER TABLE tasks ALTER COLUMN created_at SET DEFAULT now();
ALTER TABLE tasks ALTER COLUMN updated_at SET DEFAULT now();

COMMIT;