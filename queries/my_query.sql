SELECT
    *
FROM
    my_table
WHERE
    id > 100;

select
    user_id,
    count(*) as number
from
    events
group by
    user_id;
