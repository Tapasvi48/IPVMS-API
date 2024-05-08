CREATE OR REPLACE FUNCTION global_search (
    IN search_input VARCHAR(255) -- Input value to search for
)
RETURNS TABLE (
    id INT,
    document_title VARCHAR,
    category VARCHAR,
	created_by INT,
	created_at TIMESTAMP,
	source_table TEXT
)
AS
$$
BEGIN

    RETURN QUERY
    (
        -- Query to search in first table
        SELECT t1.id, t1.title AS document_title, c1.category, t1.created_by, t1.created_at, 'document' AS source_table
        FROM "document" t1
        INNER JOIN "category" c1 ON t1.category_id = c1.id
		WHERE to_tsvector('english', coalesce(c1.category, '') || ' ' || coalesce(t1.title, '') || ' ' || coalesce(convert_from(t1.htmldata,'utf8'), '')) @@ websearch_to_tsquery(search_input)

        UNION

        -- Query to search in second table
        SELECT t2.id, t2.title AS template_title, c2.category, t2.created_by, t2.created_at, 'template' AS source_table
        FROM "template" t2
        INNER JOIN "category" c2 ON t2.category_id = c2.id
		WHERE to_tsvector('english', coalesce(c2.category, '') || ' ' || coalesce(t2.title, '') || ' ' || coalesce(convert_from(t2.htmldata,'utf8'), '')) @@ websearch_to_tsquery(search_input)
		
    );
END;
$$
LANGUAGE 'plpgsql';
