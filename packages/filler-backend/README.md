
# Filler Backend

Backed api's for storing filler configuration



## API Reference

#### Get all configured form autofill datas

```http
  GET /filler/form
```

#### Create a new form data set

```http
  POST /filler/form
```

####  Create a new field in the existing form data set

```http
  POST  /filler/form/fields/:formId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `formId`      | `string` | **Required**. Id of form to add field |

#### Edit any preconfigured form

```http
  PUT /filler/form
```

## Sample Form JSON

```bash
  Sample form json

{
  "name": "payments",
  "selector": "[data-form="payments"]",
  "fields": [
    {
      "selector": "[data-field="email"]",
      "value": "abc@gmail.com",
      "type": "input"
    },
    {
      "selector": "[data-field="name"]",
      "value": "name",
      "type": "input"
    }
  ]
}
```


