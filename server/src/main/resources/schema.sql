CREATE TABLE IF NOT EXISTS editor.users (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS editor.document (
    id INTEGER NOT NULL AUTO_INCREMENT,
    title VARCHAR(255),
    body LONGTEXT,
    user_id INTEGER,
    created_at TIMESTAMP,
    modified_at TIMESTAMP,
    PRIMARY KEY (id),
    CONSTRAINT FK_USER_ID FOREIGN KEY (user_id)
        REFERENCES editor.users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS editor.token (
    id INTEGER NOT NULL AUTO_INCREMENT,
    token VARCHAR(255),
    token_type VARCHAR(255),
    is_expired VARCHAR(255),
    is_revoked VARCHAR(255),
    user_id INTEGER,
    PRIMARY KEY (id),
    CONSTRAINT USER_ID FOREIGN KEY (user_id)
        REFERENCES editor.users(id) ON DELETE CASCADE
);
