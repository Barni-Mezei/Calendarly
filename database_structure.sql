BEGIN TRANSACTION;


CREATE TABLE IF NOT EXISTS "users" (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,

    username TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    password_salt TEXT NOT NULL,

    join_date TIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS "events" (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,

    title TEXT NOT NULL,

    date_range_start TIME NOT NULL,
    date_range_end TIME NOT NULL
);

-- Available date ranges for a user on a specific event
CREATE TABLE IF NOT EXISTS "date_ranges" (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,

    user_id INTEGER NOT NULL,
    event_id INTEGER NOT NULL,

    date_start TIME NOT NULL,
    date_end TIME NOT NULL
);


--
-- Connector tables
--

CREATE TABLE IF NOT EXISTS "user_to_event" (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,

    user_id INTEGER NOT NULL,
    event_id INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS "event_urls" (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,

    event_id INTEGER NOT NULL,

    event_url TEXT NOT NULL
);


COMMIT;
