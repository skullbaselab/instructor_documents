# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## user_payments
...

## user_supplements
...

## course
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## chapters
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
order       | string    | not null

## lessons
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
chapter_id      | integer   | not null, foreign key (references chapters)
order           | integer   | not null, unique (scope: chapter_id)
lessonable_id   | integer   | not null
lessonable_type | integer   | not null

## text_lectures
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
title        | string    | not null
md_file_name | string    | not null

## video_lectures
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
video_url   | string    | not null

## complete_quiz
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
prompt      | string    | not null


## radio_quiz
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
prompt      | string    | not null
options     | string    | not null, array
answer      | string    | not null


## checkbox_quiz
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
prompt      | string    | not null
options     | string    | not null
answer      | string    | not null

## quiz_videos
column name          | data type | details
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
prompt_video_url     | string    | not null
hint_video_urls      | string    | not null
solution_video_url   | string    | not null
video_quizzable_type | string    | not null
video_quizzable_id   | integer   | not null

## note
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
noteable_type  | string    | not null
noteable_id    | integer   | not null
text           | text      | not null
