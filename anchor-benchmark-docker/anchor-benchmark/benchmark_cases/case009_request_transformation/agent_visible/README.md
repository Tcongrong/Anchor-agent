# case009_request_transformation (agent-visible corpus)

You may read only the files in this directory:

- `task.json` - the task prompt, interaction, observable and required answer JSON schema.
- `captures/` - a DevTools source dump of the running page (HTML, CSS, and the application
  JavaScript bundle under `captures/devtools-source-dump/127.0.0.1_4193/assets/`).

Answer by returning a single JSON object that matches `task.json -> answer_format.response_schema`.
