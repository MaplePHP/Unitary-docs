export const Validations = [
  {
    title: "length",
    description:
      "Validates that the length of a string is greater than or equal to a specified minimum. Optionally, a maximum length can be provided to ensure the string length falls within a defined range.",
    tags: ["string", "length", "minimum", "maximum", "range"],
    args: [
      {
        type: "int",
        name: "$min",
        required: true,
        description: "The minimum allowed length of the string.",
      },
      {
        type: "int",
        name: "$max",
        required: false,
        description:
          "The maximum allowed length of the string. If omitted, only the minimum length will be validated.",
      },
    ],
    code: `
$isValid = Validator::value("Lorem ipsum dolor")->length(1, 200);
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isRequired",
    description:
      "Validates that a value is present and not empty. Returns false for empty strings, null, zero, or other empty values. Commonly used to ensure a required field has been filled in.",
    tags: ["required", "presence", "not empty", "string", "validation"],
    args: [],
    code: `
$isValid = Validator::value("Lorem ipsum dolor")->isRequired();
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isTrue",
    description:
      "Performs a strict comparison to check if the value is exactly `true`. This validation does not allow truthy values such as `1`, `'true'`, or other equivalents—only the boolean `true` is accepted.",
    tags: ["boolean", "strict", "true", "isTrue", "type check"],
    args: [],
    code: `
$isValid = Validator::value(true)->isTrue();
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isTruthy",
    description:
      "Checks if the value is considered truthy. Accepts values such as `true`, `1`, `'1'`, `'true'`, `'on'`, and `'yes'` as valid. Uses PHP's `filter_var()` with `FILTER_VALIDATE_BOOLEAN`, making it a flexible boolean check.",
    tags: ["boolean", "truthy", "flexible", "isTruthy", "type check"],
    args: [],
    code: `
$isValid = Validator::value("yes")->isTruthy();
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isFalse",
    description:
      "Performs a strict comparison to check if the value is exactly `false`. This validation does not accept falsy values such as `0`, `'false'`, or `null`—only the boolean `false` is considered valid.",
    tags: ["boolean", "strict", "false", "isFalse", "type check"],
    args: [],
    code: `
$isValid = Validator::value(false)->isFalse();
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isFalsy",
    description:
      "Checks if the value is considered falsy. Accepts values such as `false`, `0`, `'0'`, `'false'`, `'off'`, and `'no'` as valid falsy inputs. Uses PHP's `filter_var()` with `FILTER_VALIDATE_BOOLEAN` for flexible boolean validation.",
    tags: ["boolean", "falsy", "flexible", "isFalsy", "type check"],
    args: [],
    code: `
$isValid = Validator::value("no")->isFalsy();
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isInArray",
    description:
      "Checks if a specified value exists within the provided array. This method performs a strict type comparison, ensuring that both the value and its type match exactly.",
    tags: ["array", "value", "exists", "in_array", "strict comparison"],
    args: [
      {
        type: "mixed",
        name: "$needle",
        required: true,
        description: "The value to search for within the array.",
      }
    ],
    code: `
$isValid = Inp::value(["apple", "banana", "cherry"])->isInArray("banana");
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isLooselyInArray",
    description:
      "Checks if a specified value exists within the provided array using loose comparison. Type matching is not required, allowing values like `0` and `'0'` to be treated as equal.",
    tags: ["array", "value", "exists", "in_array", "loose comparison", "flexible"],
    args: [
      {
        type: "mixed",
        name: "$needle",
        required: true,
        description: "The value to search for within the array.",
      }
    ],
    code: `
$isValid = Inp::value([0, 1, 2])->isLooselyInArray("1");
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "keyExists",
    description:
      "Checks if a specified key exists in the array. This validation first ensures the value is an array, then uses `array_key_exists()` to verify the presence of the given key.",
    tags: ["array", "key", "keyExists", "array_key_exists", "validation"],
    args: [
      {
        type: "string|int",
        name: "$key",
        required: true,
        description: "The key to check for in the array.",
      }
    ],
    code: `
$isValid = Validator::value(["name" => "Alice", "age" => 30])->keyExists("name");
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "hasValue",
    description:
      "Checks whether the value contains at least one character. This validation does not consider the content, only that something is present (i.e. not an empty string).",
    tags: ["string", "value", "not empty", "length", "hasValue"],
    args: [],
    code: `
$isValid = Validator::value("Hello")->hasValue();
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isSocialNumber",
    description:
      "Validates a personal identity number (personnummer). The value must follow the correct format and pass both the Luhn algorithm and the specific rules for Swedish social numbers. The Luhn algorithm is also commonly used in social security or identification numbers in countries like Norway, Swedish, Finland, and Denmark, although formats and validation rules may differ slightly.",
    tags: [
      "Sweden",
      "Norway",
      "Finland",
      "Denmark",
      "personnummer",
      "social number",
      "Swedish ID",
      "Nordic ID",
      "Luhn",
      "validation"
    ],
    args: [],
    code: `
$isValid = Validator::value("19900101-1234")->isSocialNumber();
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isOrgNumber",
    description:
      "Validates a organization number (organisationsnummer). The value must follow the correct structure and pass the Luhn algorithm, which is used to ensure the number’s integrity. The Luhn algorithm is also used for validating similar types of registration or identification numbers in other countries, including Sweden (organisationsnummer), Norway (organisasjonsnummer), Finland (y-tunnus), and Denmark (CVR-nummer), although the formatting rules may differ.",
    tags: [
      "Sweden",
      "Norway",
      "Finland",
      "Denmark",
      "organization number",
      "org number",
      "organisationsnummer",
      "Luhn",
      "company ID",
      "validation"
    ],
    args: [],
    code: `
$isValid = Validator::value("556016-0680")->isOrgNumber();
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isVatNumber",
    description:
      "Validates a VAT number. The value must follow the correct format and pass the Luhn algorithm check for nordic countries, including Swedish (momsregistreringsnummer), Norway (MVA-nummer), Finland (ALV-numero), and Denmark (Momsnummer), although exact formats and rules vary. Other EU countries uses unique patterns to for each country to validate VAT numbers.",
    tags: [
      "Sweden",
      "Norway",
      "Finland",
      "Denmark",
      "VAT number",
      "momsnummer",
      "momsregistreringsnummer",
      "tax ID",
      "Luhn",
      "validation"
    ],
    args: [],
    code: `
$isValid = Validator::value("SE556016068001")->isVatNumber();
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isCreditCard",
    description:
      "Validates a credit card number by checking both the number format and applying the Luhn algorithm. This method supports most major card types including Visa, MasterCard, American Express, and others that follow Luhn validation rules. Note: Actual card brand detection is not performed—only structural and checksum validation.",
    tags: [
      "credit card",
      "payment",
      "card number",
      "Luhn",
      "validation",
      "Visa",
      "MasterCard",
      "Amex"
    ],
    args: [],
    code: `
$isValid = Validator::value("4111111111111111")->isCreditCard();
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isEmail",
    description:
      "Validates that the value is a properly formatted email address. This ensures the syntax follows standard email conventions (e.g. user@example.com).",
    tags: [
      "email",
      "validation",
      "filter",
      "email address",
      "syntax check",
      "isEmail"
    ],
    args: [],
    code: `
$isValid = Validator::value("user@example.com")->isEmail();
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isDeliverableEmail",
    description:
      "Validates whether an email address is potentially deliverable. This checks both the syntax of the email address using standard email validation, and verifies that the domain has a valid MX (Mail Exchange) DNS record. This helps ensure that the email address is not only well-formed but also points to a mail-receiving server.",
    tags: [
      "email",
      "deliverability",
      "MX record",
      "DNS",
      "validation",
      "email check",
      "isDeliverableEmail"
    ],
    args: [],
    code: `
$isValid = Validator::value("user@example.com")->isDeliverableEmail();
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "contains",
    description:
      "Checks if the string contains the given substring anywhere within it. This is a simple case-sensitive check using PHP’s `str_contains()` function.",
    tags: [
      "string",
      "contains",
      "substring",
      "match",
      "text",
      "validation"
    ],
    args: [
      {
        type: "string",
        name: "$needle",
        required: true,
        description: "The substring to search for within the value.",
      }
    ],
    code: `
$isValid = Validator::value("Laravel is great")->contains("great");
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "startsWith",
    description:
      "Checks if the string starts with the given substring. This is a case-sensitive match using PHP’s `str_starts_with()` function.",
    tags: [
      "string",
      "startsWith",
      "prefix",
      "substring",
      "validation"
    ],
    args: [
      {
        type: "string",
        name: "$needle",
        required: true,
        description: "The substring to check for at the beginning of the value.",
      }
    ],
    code: `
$isValid = Validator::value("framework")->startsWith("frame");
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "endsWith",
    description:
      "Checks if the string ends with the given substring. This is a case-sensitive match using PHP’s `str_ends_with()` function.",
    tags: [
      "string",
      "endsWith",
      "suffix",
      "substring",
      "validation"
    ],
    args: [
      {
        type: "string",
        name: "$needle",
        required: true,
        description: "The substring to check for at the end of the value.",
      }
    ],
    code: `
$isValid = Validator::value("validation")->endsWith("tion");
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isPhone",
    description:
      "Validates if the value is a valid phone number. This method removes common separators like spaces, dashes, and parentheses before checking the format. It supports both flexible phone numbers with 7–14 digits and strict international numbers starting with a `+` followed by 7–15 digits.",
    tags: [
      "phone",
      "telephone",
      "mobile",
      "international",
      "phone number",
      "validation"
    ],
    args: [],
    code: `
$isValid = Validator::value("+46701234567")->isPhone();
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isZip",
    description:
      "Validates if the value is a ZIP or postal code by first removing spaces and common dash characters, then checking if it's an integer and if its length matches the expected range. This method supports country-specific formatting by accepting a minimum and optional maximum length.",
    tags: [
      "zip",
      "postal code",
      "postcode",
      "number",
      "length",
      "validation",
      "isZip"
    ],
    args: [
      {
        type: "int",
        name: "$minLength",
        required: true,
        description: "The minimum number of digits the ZIP code should have.",
      },
      {
        type: "int",
        name: "$maxLength",
        required: false,
        description: "The maximum number of digits allowed. If omitted, only the minimum length will be validated.",
      }
    ],
    code: `
$isValid = Validator::value("123 45")->isZip(5);
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isFloat",
    description:
      "Validates whether the value is a valid float. Common for validating decimal numbers, even when passed as strings (e.g., from form input).",
    tags: ["float", "number", "decimal", "numeric", "isFloat"],
    args: [],
    code: `
$isValid = Validator::value("10.5")->isFloat();
var_dump($isValid);
`,
    result: `
true
  `,
  },
  {
    title: "isInt",
    description:
      "Validates whether the value is a valid integer. Useful for checking numeric input, even when the value is submitted as a string.",
    tags: ["integer", "int", "number", "numeric", "isInt"],
    args: [],
    code: `
$isValid = Validator::value("42")->isInt();
var_dump($isValid);
`,
    result: `
true
  `,
  },
  {
    title: "isString",
    description:
      "Checks if the value is of type string. This does not cast values; it strictly checks the data type.",
    tags: ["string", "type", "text", "isString"],
    args: [],
    code: `
$isValid = Validator::value("hello")->isString();
var_dump($isValid);
`,
    result: `
true
  `,
  },
  {
    title: "isArray",
    description:
      "Checks if the value is an array. Does not validate JSON or comma-separated strings—only PHP arrays.",
    tags: ["array", "type", "collection", "isArray"],
    args: [],
    code: `
$isValid = Validator::value(["a", "b", "c"])->isArray();
var_dump($isValid);
`,
    result: `
true
  `,
  },
  {
    title: "isObject",
    description:
      "Checks if the value is an object. Useful for validating instances, configurations, or dynamic data structures.",
    tags: ["object", "type", "isObject"],
    args: [],
    code: `
$isValid = Validator::value((object)["a" => 1])->isObject();
var_dump($isValid);
`,
    result: `
true
  `,
  },
  {
    title: "isResource",
    description:
      "Checks if the value is a valid PHP resource (e.g., file handles, database connections).",
    tags: ["resource", "php", "stream", "type", "isResource"],
    args: [],
    code: `
// Example with fopen (works in real execution)
$handle = fopen("example.txt", "r");
$isValid = Validator::value($handle)->isResource();
var_dump($isValid);
`,
    result: `
true
  `,
  },
  {
    title: "isNull",
    description:
      "Checks if the value is strictly `null`. This validation only passes when the value is exactly `null`, not when it is an empty string, `false`, or any other falsy value.",
    tags: ["null", "type check", "strict", "isNull"],
    args: [],
    code: `
$isValid = Validator::value(null)->isNull();
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isFullHtml",
    description:
      "Checks if the string is a complete HTML document. Must include doctype, `<html>`, `<head>`, and `<body>` tags.",
    tags: ["html", "doctype", "markup", "full html", "isFullHtml"],
    args: [],
    code: `
$html = '<!DOCTYPE html><html><head><title>Test</title></head><body>Hello</body></html>';
$isValid = Validator::value($html)->isFullHtml();
var_dump($isValid);
`,
    result: `
true
  `,
  },
  {
    title: "isDir",
    description:
      "Checks if the given value is a valid directory path. Returns true only if the path exists and is recognized as a directory by the filesystem.",
    tags: ["filesystem", "directory", "path", "isDir", "file check"],
    args: [],
    code: `
$isValid = Validator::value("/var/www/html")->isDir();
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isFile",
    description:
      "Checks if the given value is a valid file path. Returns true only if the path exists and is recognized as a file by the filesystem (not a directory).",
    tags: ["filesystem", "file", "path", "isFile", "file check"],
    args: [],
    code: `
$isValid = Validator::value("/var/www/html/index.php")->isFile();
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isFileOrDirectory",
    description:
      "Checks whether the given value is a valid path to an existing file or directory. Uses PHP's `file_exists()` to determine the existence of the file system resource.",
    tags: ["file", "directory", "filesystem", "path", "exists"],
    args: [],
    code: `
$isValid = Validator::value("/path/to/file.txt")->isFileOrDirectory();
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isWritable",
    description:
      "Checks whether the given path is writable. This includes files and directories that the current process has permission to write to, using PHP's `is_writable()` function.",
    tags: ["file", "directory", "writable", "filesystem", "permissions"],
    args: [],
    code: `
$isValid = Validator::value("/path/to/file.txt")->isWritable();
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isReadable",
    description:
      "Checks whether the given path is readable. Applies to both files and directories, using PHP's `is_readable()` function to determine if the current process has read permissions.",
    tags: ["file", "directory", "readable", "filesystem", "permissions"],
    args: [],
    code: `
$isValid = Validator::value("/path/to/file.txt")->isReadable();
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isNumber",
    description:
      "Validates that the value is strictly a number, either an integer or a floating-point number. This check does not accept numeric strings—only actual numeric types are considered valid.",
    tags: ["number", "numeric", "int", "float", "type check"],
    args: [],
    code: `
$isValid = Validator::value(3.14)->isNumber();
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isNumbery",
    description:
      "Checks if the value is numeric in a loose sense. Accepts numeric strings (e.g. `'42'`, `'3.14'`), integers, floats, and scientific notation (e.g. `'1e4'`). Uses PHP’s `is_numeric()` function.",
    tags: ["number", "numeric", "string", "loose", "scientific notation", "is_numeric"],
    args: [],
    code: `
$isValid = Validator::value("1e4")->isNumbery();
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isPositive",
    description:
      "Checks if the value is a positive number, including zero. Accepts both integers and floats, as well as numeric strings that can be cast to a float.",
    tags: ["positive", "number", "numeric", "greater than zero", "float", "int"],
    args: [],
    code: `
$isValid = Validator::value(20)->isPositive();
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isNegative",
    description:
      "Checks if the value is a negative number. Accepts both integers and floats, as well as numeric strings that can be cast to a float. Zero and positive values are not considered valid.",
    tags: ["negative", "number", "numeric", "less than zero", "float", "int"],
    args: [],
    code: `
$isValid = Validator::value(-20)->isNegative();
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "min",
    description:
      "Validates that the value is greater than or equal to the given minimum number. Accepts integers, floats, and numeric strings that can be cast to a float.",
    tags: ["minimum", "min", "number", "float", "int", "greater than or equal"],
    args: [
      {
        type: "float",
        name: "$int",
        required: true,
        description: "The minimum numeric value allowed.",
      }
    ],
    code: `
$isValid = Validator::value(25)->min(10);
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "max",
    description:
      "Validates that the value is less than or equal to the given maximum number. Accepts integers, floats, and numeric strings that can be cast to a float.",
    tags: ["maximum", "max", "number", "float", "int", "less than or equal"],
    args: [
      {
        type: "float",
        name: "$int",
        required: true,
        description: "The maximum numeric value allowed.",
      }
    ],
    code: `
$isValid = Validator::value(25)->max(30);
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isArrayEmpty",
    description:
      "Checks whether the value is an array and that it contains no elements. Returns true only if the value is an array and its length is zero.",
    tags: ["array", "empty", "isArrayEmpty", "length", "validation"],
    args: [],
    code: `
$isValid = Validator::value([])->isArrayEmpty();
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "itemsAreTruthy",
    description:
      "Checks whether all items in an array have a truthy value for the specified key. Each item is expected to be an object or structure where the given key exists. The check uses flexible boolean validation (truthy values such as `true`, `1`, `'yes'`, etc.).",
    tags: ["array", "truthy", "items", "key", "validation", "boolean"],
    args: [
      {
        type: "string|int|float",
        name: "$key",
        required: true,
        description:
          "The key to check in each item of the array. The corresponding value must be truthy.",
      }
    ],
    code: `
$data = [
  ["name" => "John Doe", "active" => true],
  ["name" => "John Doe", "active" => "yes"],
  ["name" => "John Doe", "active" => 1]
];
$isValid = Validator::value($data)->itemsAreTruthy("active");
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "hasTruthyItem",
    description:
      "Checks if an array contains at least one item where the specified key holds a truthy value. The value at the key is evaluated using flexible boolean validation (e.g. `true`, `1`, `'yes'`, `'on'`, etc.).",
    tags: ["array", "truthy", "item", "key", "hasTruthyItem"],
    args: [
      {
        type: "string | int | float",
        name: "$key",
        required: true,
        description:
          "The key to look for in each item of the array. The value at this key is evaluated for truthiness.",
      }
    ],
    code: `
$data = [
  ["name" => "John Doe", "active" => false],
  ["name" => "John Doe", "active" => "yes"],
  ["name" => "John Doe", "active" => 0]
];

$isValid = Validator::value($data)->hasTruthyItem("active");
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isCountEqualTo",
    description:
      "Validates that the given value is an array and that the number of items in the array is exactly equal to the specified length.",
    tags: ["array", "count", "length", "isCountEqualTo", "equal"],
    args: [
      {
        type: "int",
        name: "$length",
        required: true,
        description: "The exact number of items the array should contain.",
      }
    ],
    code: `
$isValid = Validator::value(["a", "b", "c"])->isCountEqualTo(3);
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isCountMoreThan",
    description:
      "Validates that the given value is an array and contains more items than the specified number.",
    tags: ["array", "count", "length", "more than", "isCountMoreThan"],
    args: [
      {
        type: "int",
        name: "$length",
        required: true,
        description: "The minimum number of items the array must exceed.",
      }
    ],
    code: `
$isValid = Validator::value(["apple", "banana", "cherry"])->isCountMoreThan(2);
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isCountLessThan",
    description:
      "Validates that the given value is an array and contains fewer items than the specified number.",
    tags: ["array", "count", "length", "less than", "isCountLessThan"],
    args: [
      {
        type: "int",
        name: "$length",
        required: true,
        description: "The maximum number of items the array must not exceed.",
      }
    ],
    code: `
$isValid = Validator::value(["red", "green"])->isCountLessThan(3);
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isLengthEqualTo",
    description:
      "Validates that the length of a string is exactly equal to the specified number of characters.",
    tags: ["string", "length", "equal", "isLengthEqualTo"],
    args: [
      {
        type: "int",
        name: "$length",
        required: true,
        description: "The exact number of characters the string must contain.",
      }
    ],
    code: `
$isValid = Validator::value("hello")->isLengthEqualTo(5);
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isEqualTo",
    description: "Performs a strict comparison to check if the value is exactly equal to the expected value. Both type and value must match.",
    tags: ["strict", "equal", "comparison", "match", "type safe"],
    args: [
      {
        type: "mixed",
        name: "$expected",
        required: true,
        description: "The exact value to compare against."
      }
    ],
    code: `
$isValid = Validator::value(123)->isEqualTo(123);
var_dump($isValid);
`,
    result: `
true
  `
  },
  {
    title: "isLooselyEqualTo",
    description: "Checks if the value is loosely equal to the expected value. Type juggling is allowed in the comparison.",
    tags: ["loose", "equal", "comparison", "flexible", "match"],
    args: [
      {
        type: "mixed",
        name: "$expected",
        required: true,
        description: "The value to compare against using loose comparison (`==`)."
      }
    ],
    code: `
$isValid = Validator::value("123")->isLooselyEqualTo(123);
var_dump($isValid);
`,
    result: `
true
  `
  },
  {
    title: "isNotEqualTo",
    description: "Performs a strict comparison to check if the value is not equal to the provided value. Both type and value must differ.",
    tags: ["strict", "not equal", "comparison", "type safe"],
    args: [
      {
        type: "mixed",
        name: "$value",
        required: true,
        description: "The value to compare against for inequality."
      }
    ],
    code: `
$isValid = Validator::value(123)->isNotEqualTo("123");
var_dump($isValid);
`,
    result: `
true
  `
  },
  {
    title: "isLooselyNotEqualTo",
    description: "Performs a loose comparison to check if the value is not equal to the provided value. Type differences are allowed.",
    tags: ["loose", "not equal", "comparison", "flexible"],
    args: [
      {
        type: "mixed",
        name: "$value",
        required: true,
        description: "The value to compare against using loose inequality (`!=`)."
      }
    ],
    code: `
$isValid = Validator::value("123")->isLooselyNotEqualTo(456);
var_dump($isValid);
`,
    result: `
true
  `
  },
  {
    title: "isInstanceOf",
    description:
      "Checks whether the value is an instance of a specified class or implements a given interface. This validation performs a strict type check using PHP's `instanceof` operator.",
    tags: ["object", "class", "instanceof", "interface", "type check"],
    args: [
      {
        type: "object|string",
        name: "$instance",
        required: true,
        description:
          "The class or interface name to check against. Can be passed as a string or an object.",
      }
    ],
    code: `
class User {}
$user = new User();

$isValid = Inp::value($user)->isInstanceOf(User::class);
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isLessThan",
    description: "Checks if the current value is numerically less than the given number.",
    tags: ["comparison", "less", "numeric", "check"],
    args: [
      {
        type: "float|int",
        name: "$num",
        required: true,
        description: "The number to compare against."
      }
    ],
    code: `
$isValid = Validator::value(3)->isLessThan(5);
var_dump($isValid);
`,
    result: `
true
  `
  },
  {
    title: "isGreaterThan",
    description: "Checks if the current value is numerically greater than the given number.",
    tags: ["comparison", "greater", "numeric", "check"],
    args: [
      {
        type: "float|int",
        name: "$num",
        required: true,
        description: "The number to compare against."
      }
    ],
    code: `
$isValid = Validator::value(10)->isGreaterThan(5);
var_dump($isValid);
`,
    result: `
true
  `
  },
  {
    title: "isAtLeast",
    description:
      "Checks if the value is greater than or equal to the specified number. Useful for setting a lower bound in numeric validations.",
    tags: ["number", "minimum", "greater than", "isAtLeast", "value check"],
    args: [
      {
        type: "float|int",
        name: "$num",
        required: true,
        description: "The minimum threshold the value must be greater than or equal to.",
      }
    ],
    code: `
$isValid = Inp::value(10)->isAtLeast(5);
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isAtMost",
    description:
      "Checks if the value is less than or equal to the specified number. Useful for setting an upper bound in numeric validations.",
    tags: ["number", "maximum", "less than", "isAtMost", "value check"],
    args: [
      {
        type: "float|int",
        name: "$num",
        required: true,
        description: "The maximum threshold the value must be less than or equal to.",
      }
    ],
    code: `
$isValid = Inp::value(10)->isAtMost(15);
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isValidVersion",
    description: "Checks if the value is a valid version number. When strict mode is enabled, it requires Semantic Versioning format (e.g. `1.0.0`).",
    tags: ["version", "semver", "validation", "format", "check"],
    args: [
      {
        type: "bool",
        name: "$strict",
        required: false,
        description: "Enable strict Semantic Versioning format check (e.g. 1.0.0). Defaults to `false`."
      }
    ],
    code: `
$isValid = Validator::value("1.2.3")->isValidVersion(true);
var_dump($isValid);
`,
    result: `
true
  `
  },
  {
    title: "versionCompare",
    description: "Compares the current version against another using a specified comparison operator. Supports all standard version_compare operators.",
    tags: ["version", "compare", "semver", "greater", "equal", "less"],
    args: [
      {
        type: "string",
        name: "$withVersion",
        required: true,
        description: "The version to compare against."
      },
      {
        type: "string",
        name: "$operator",
        required: false,
        description: "The comparison operator (e.g. `==`, `>=`, `lt`). Defaults to `==`."
      }
    ],
    code: `
$isValid = Validator::value("2.0.0")->versionCompare("1.9.0", ">=");
var_dump($isValid);
`,
    result: `
true
  `
  },
  {
    title: "isLossyPassword",
    description: "Checks if the value is a valid password containing only allowed characters (letters, digits, and special characters). Does not require specific character types.",
    tags: ["password", "validation", "lossy", "regex", "character check"],
    args: [
      {
        type: "int",
        name: "$length",
        required: false,
        description: "The minimum length required. Defaults to 1."
      }
    ],
    code: `
$isValid = Validator::value("abc123$")->isLossyPassword(6);
var_dump($isValid);
`,
    result: `
true
  `
  },
  {
    title: "isStrictPassword",
    description: "Validates that the password includes at least one lowercase letter, one uppercase letter, one digit, and one special character. Recommended to combine with `@length(8, 60)` for complete strength validation.",
    tags: ["password", "strict", "secure", "regex", "complexity"],
    args: [
      {
        type: "int",
        name: "$length",
        required: false,
        description: "The minimum length required. Defaults to 1."
      }
    ],
    code: `
$isValid = Validator::value("Abc123$!")->isStrictPassword(8);
var_dump($isValid);
`,
    result: `
true
  `
  },
  {
    title: "isMatchingPattern",
    description:
      "Validates that the value contains only characters from the specified character range pattern. Useful for custom character restrictions.",
    tags: ["pattern", "regex", "characters", "custom", "range"],
    args: [
      {
        type: "string",
        name: "$charRange",
        required: true,
        description: "A character range pattern (e.g., 'a-z', 'A-Z0-9') to match against.",
      }
    ],
    code: `
$isValid = Validator::value("ABC123")->isMatchingPattern("A-Z0-9");
var_dump($isValid);
`,
    result: `
true
  `
  },
  {
    title: "isAlpha",
    description:
      "Checks if the value contains only alphabetic characters (both lowercase and uppercase letters).",
    tags: ["alpha", "letters", "alphabetic", "string"],
    args: [],
    code: `
$isValid = Validator::value("Hello")->isAlpha();
var_dump($isValid);
`,
    result: `
true
  `
  },
  {
    title: "isLowerAlpha",
    description:
      "Checks if the value contains only lowercase alphabetic characters (a–z).",
    tags: ["alpha", "lowercase", "string", "letters"],
    args: [],
    code: `
$isValid = Validator::value("hello")->isLowerAlpha();
var_dump($isValid);
`,
    result: `
true
  `
  },
  {
    title: "isUpperAlpha",
    description:
      "Checks if the value contains only uppercase alphabetic characters (A–Z).",
    tags: ["alpha", "uppercase", "string", "letters"],
    args: [],
    code: `
$isValid = Validator::value("HELLO")->isUpperAlpha();
var_dump($isValid);
`,
    result: `
true
  `
  },
  {
    title: "isHexColor",
    description:
      "Checks if the value is a valid hexadecimal color code (e.g., `#fff` or `#ffffff`).",
    tags: ["hex", "color", "code", "string", "css"],
    args: [],
    code: `
$isValid = Validator::value("#a3c113")->isHex();
var_dump($isValid);
`,
    result: `
true
  `
  },
  {
    title: "isHexString",
    description:
      "Validates that the value is a valid hexadecimal string. The string must contain only characters 0–9 and a–f (case-insensitive). An optional length can be specified to enforce an exact character count.",
    tags: ["hex", "hexadecimal", "string", "isHexString", "format", "validation"],
    args: [
      {
        type: "int",
        name: "$length",
        required: false,
        description: "Optional. If set, the hexadecimal string must match this exact length.",
      }
    ],
    code: `
$isValid = Inp::value("1A3F")->isHexString(4);
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isDate",
    description:
      "Validates that the value matches a date in a specific format. The default format is `Y-m-d` (e.g., '2025-04-22').",
    tags: ["date", "format", "validation", "string"],
    args: [
      {
        type: "string",
        name: "$format",
        required: false,
        description: "A date format string compatible with PHP's `DateTime::createFromFormat`. Defaults to `Y-m-d`.",
      }
    ],
    code: `
$isValid = Validator::value("2025-04-22")->isDate();
var_dump($isValid);
`,
    result: `
true
  `
  },
  {
    title: "isDateWithTime",
    description:
      "Checks if the value is a valid date and time in the format `Y-m-d H:i:s`.",
    tags: ["date", "datetime", "timestamp", "validation"],
    args: [],
    code: `
$isValid = Validator::value("2025-04-22 14:30:00")->isDateWithTime();
var_dump($isValid);
`,
    result: `
true
  `
  },
  {
    title: "isTime",
    description:
      "Checks if the value is a valid time. By default, the format is `H:i`. Set `$withSeconds` to `true` to validate `H:i:s`.",
    tags: ["time", "format", "clock", "validation"],
    args: [
      {
        type: "bool",
        name: "$withSeconds",
        required: false,
        description: "Whether to include seconds (`H:i:s`). Defaults to `false` (`H:i`).",
      }
    ],
    code: `
$isValid = Validator::value("14:30")->isTime();
var_dump($isValid);
`,
    result: `
true
  `
  },
  {
    title: "isAge",
    description:
      "Validates that a date-based value corresponds to a minimum age. The value must be a valid date string in `Y-m-d` format, representing a birthdate. The method calculates the age based on the current year.",
    tags: ["date", "age", "minimum", "birthdate", "isAge"],
    args: [
      {
        type: "int",
        name: "$checkAge",
        required: true,
        description: "The minimum age to validate against.",
      },
    ],
    code: `
$isValid = Validator::value("2000-01-01")->isAge(18);
var_dump($isValid);
`,
    result: `
true
  `
  },
  {
    title: "isDomain",
    description:
      "Validates that the value is a syntactically valid domain name. Optionally enforces stricter checks using `FILTER_FLAG_HOSTNAME`.",
    tags: ["domain", "url", "hostname", "validation", "isDomain"],
    args: [
      {
        type: "bool",
        name: "$strict",
        required: false,
        description: "If true, enables stricter hostname validation.",
      },
    ],
    code: `
$isValid = Validator::value("example.com")->isDomain();
var_dump($isValid);
`,
    result: `
true
  `
  },
  {
    title: "isUrl",
    description:
      "Checks if the value is a valid URL starting with http or https. This method uses PHP’s `FILTER_VALIDATE_URL`.",
    tags: ["url", "http", "https", "web address", "isUrl"],
    args: [],
    code: `
$isValid = Validator::value("https://example.com")->isUrl();
var_dump($isValid);
`,
    result: `
true
  `
  },
  {
    title: "isResolvableHost",
    description:
      "Validates whether a domain or host has a valid DNS record. This includes checking A, AAAA, or MX records.",
    tags: ["dns", "domain", "host", "resolvable", "isResolvableHost"],
    args: [],
    code: `
$isValid = Validator::value("example.com")->isResolvableHost();
var_dump($isValid);
`,
    result: `
true
  `
  },
  {
    title: "isHttpStatusCode",
    description:
      "Checks if the value is one of the officially recognized HTTP status codes (e.g., 200, 404, 500).",
    tags: ["http", "status code", "isHttpStatusCode", "response"],
    args: [],
    code: `
$isValid = Validator::value(404)->isHttpStatusCode();
var_dump($isValid);
`,
    result: `
true
  `
  },
  {
    title: "isHttp200",
    description:
      "Strictly validates that the value is the HTTP 200 OK status code.",
    tags: ["http", "status", "200", "success", "isHttp200"],
    args: [],
    code: `
$isValid = Validator::value(200)->isHttp200();
var_dump($isValid);
`,
    result: `
true
  `
  },
  {
    title: "isHttpSuccess",
    description:
      "Checks if the value is a 2xx range HTTP status code, indicating a successful response.",
    tags: ["http", "2xx", "success", "isHttpSuccess"],
    args: [],
    code: `
$isValid = Validator::value(204)->isHttpSuccess();
var_dump($isValid);
`,
    result: `
true
  `
  },
  {
    title: "isHttpClientError",
    description:
      "Checks if the value is a 4xx range HTTP status code, indicating a client-side error.",
    tags: ["http", "4xx", "client error", "isHttpClientError"],
    args: [],
    code: `
$isValid = Validator::value(404)->isHttpClientError();
var_dump($isValid);
`,
    result: `
true
  `
  },
  {
    title: "isHttpServerError",
    description:
      "Checks if the value is a 5xx range HTTP status code, indicating a server-side error.",
    tags: ["http", "5xx", "server error", "isHttpServerError"],
    args: [],
    code: `
$isValid = Validator::value(503)->isHttpServerError();
var_dump($isValid);
`,
    result: `
true
  `
  },
  {
    title: "isRequestMethod",
    description:
      "Validates whether the given string is a valid HTTP request method. Accepted methods include: `GET`, `POST`, `PUT`, `DELETE`, `PATCH`, `HEAD`, and `OPTIONS`. The check is case-sensitive and only matches exact method names.",
    tags: ["http", "request", "method", "request method", "validation"],
    args: [],
    code: `
$isValid = Inp::value("POST")->isRequestMethod();
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "hasKey",
    description:
      "Checks whether a specific key exists in the given array or object without flattening the structure. This method uses a deep traversal that respects nested hierarchies without merging keys into dot notation.",
    tags: ["key", "array", "object", "exists", "hasKey", "traverse"],
    args: [
      {
        type: "string|int|float",
        name: "$key",
        required: true,
        description: "The key to check for in the array or object.",
      }
    ],
    code: `
$data = ['user' => ['name' => 'John']];
$isValid = Inp::value($data)->hasKey('user');
// Inp::value($data)->hasKey('user.name') // Also true
var_dump($isValid);
`,
    result: `
true
    `
  },
  {
    title: "hasFlattenKey",
    description:
      "Checks whether a specific key exists in a flattened version of an array or object. The structure is flattened into dot notation before the key check is performed, allowing nested keys to be accessed as a flat path.",
    tags: ["key", "array", "object", "flatten", "dot notation", "hasFlattenKey", "traverse"],
    args: [
      {
        type: "string|int|float",
        name: "$key",
        required: true,
        description:
          "The key to search for in the flattened array or object structure (dot notation is supported).",
      }
    ],
    code: `
$data = ['user' => ['name' => 'John']];
$isValid = Inp::value($data)->hasFlattenKey('name');
var_dump($isValid);
`,
    result: `
true
    `
  },
  {
    title: "oneOf",
    description:
      "Validates the value against multiple methods and returns true if at least one validation passes. Useful for conditional validation rules.",
    tags: ["oneOf", "multiple", "conditional", "validation", "match any"],
    args: [
      {
        type: "array",
        name: "$arr",
        required: true,
        description: "Associative array of method names and their arguments.",
      }
    ],
    code: `
$isValid = Validator::value("abc")->oneOf([
  "isUrl" => [],
  "length" => [3, 10]
]);
var_dump($isValid);
`,
    result: `
true
  `
  },
  {
    title: "allOf",
    description:
      "Validates the value against multiple methods and returns true only if all validations pass. Useful for combining multiple rules into one check.",
    tags: ["allOf", "multiple", "chained", "validation", "match all"],
    args: [
      {
        type: "array",
        name: "$arr",
        required: true,
        description: "Associative array of method names and their arguments.",
      }
    ],
    code: `
$isValid = Validator::value("https://example.com")->allOf([
  "isUrl" => [],
  "length" => [5, 100]
]);
var_dump($isValid);
`,
    result: `
true
  `
  },
  {
    title: "findInString",
    description:
      "Checks whether the given substring exists within the value. By default, it returns `true` if the substring is found anywhere in the string. Optionally, you can provide a position to check if the substring appears at a specific index.",
    tags: [
      "string",
      "substring",
      "position",
      "contains",
      "find",
      "match",
      "validation",
      "findInString"
    ],
    args: [
      {
        type: "string",
        name: "$match",
        required: true,
        description: "The substring to search for in the value.",
      },
      {
        type: "int",
        name: "$pos",
        required: false,
        description: "Optional position index to match the substring against.",
      }
    ],
    code: `
$isValid = Validator::value("Hello world")->findInString("world");
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isResolvableHost",
    description:
      "Checks if a domain or host is resolvable via DNS. It validates whether an MX record (mail exchange) or an address record (A or AAAA) exists for the host.",
    tags: ["dns", "domain", "host", "resolvable", "isResolvableHost", "validation"],
    args: [],
    code: `
$isValid = Validator::value("example.com")->dns()->isResolvableHost();
var_dump($isValid);
`,
    result: `
true
    `,
  },
  {
    title: "isAddressRecord",
    description:
      "Checks if a domain has a valid A or AAAA DNS record. An A record maps a domain to an IPv4 address, and an AAAA record maps it to an IPv6 address.",
    tags: ["dns", "domain", "host", "address record", "A", "AAAA", "validation"],
    args: [],
    code: `
$isValid = Validator::value("example.com")->dns()->isAddressRecord();
var_dump($isValid);
`,
    result: `
true
  `,
  },
  {
    title: "isMxRecord",
    description:
      "Checks if a domain has a valid MX (Mail Exchange) DNS record. MX records are used to route emails to the correct mail server for the domain.",
    tags: ["dns", "domain", "host", "mx record", "email", "validation"],
    args: [],
    code: `
$isValid = Validator::value("example.com")->dns()->isMxRecord();
var_dump($isValid);
`,
    result: `
true
  `,
  },
  {
    title: "isCnameRecord",
    description:
      "Checks if a domain has a valid CNAME (Canonical Name) DNS record. A CNAME record aliases one domain to another, allowing multiple domains to point to the same destination.",
    tags: ["dns", "domain", "host", "cname record", "alias", "validation"],
    args: [],
    code: `
$isValid = Validator::value("example.com")->dns()->isCnameRecord();
var_dump($isValid);
`,
    result: `
true
  `,
  },
  {
    title: "isARecord",
    description:
      "Checks if a domain has a valid A record in DNS. An A record maps a domain name to its corresponding IPv4 address, enabling resolution to an IP address.",
    tags: ["dns", "domain", "host", "a record", "ipv4", "validation"],
    args: [],
    code: `
$isValid = Validator::value("example.com")->dns()->isARecord();
var_dump($isValid);
`,
    result: `
true
  `,
  },
  {
    title: "isAaaaRecord",
    description:
      "Checks if a domain has a valid AAAA record in DNS. An AAAA record maps a domain name to its corresponding IPv6 address.",
    tags: ["dns", "domain", "host", "aaaa record", "ipv6", "validation"],
    args: [],
    code: `
$isValid = Validator::value("example.com")->dns()->isAaaaRecord();
var_dump($isValid);
`,
    result: `
true
  `,
  },
  {
    title: "isNsRecord",
    description:
      "Checks if a domain has a valid NS (Name Server) DNS record. NS records specify the authoritative name servers responsible for the domain.",
    tags: ["dns", "domain", "host", "ns record", "name server", "validation"],
    args: [],
    code: `
$isValid = Validator::value("example.com")->dns()->isNsRecord();
var_dump($isValid);
`,
    result: `
true
  `,
  },
  {
    title: "isSoaRecord",
    description:
      "Checks if a domain has a 'SOA' (Start of Authority) DNS record. The SOA record contains administrative information about the domain, such as the primary DNS server and administrator contact details.",
    tags: ["dns", "SOA", "start of authority", "domain", "validation"],
    args: [],
    code: `
$isValid = Validator::value("example.com")->dns()->isSoaRecord();
var_dump($isValid);
`,
    result: `
true
  `,
  },
  {
    title: "isTxtRecord",
    description:
      "Checks if a domain has a 'TXT' DNS record. TXT records are used to store text information such as SPF records or other human-readable data linked to the domain.",
    tags: ["dns", "TXT", "text record", "domain", "validation"],
    args: [],
    code: `
$isValid = Validator::value("example.com")->dns()->isTxtRecord();
var_dump($isValid);
`,
    result: `
true
  `,
  },
  {
    title: "isSrvRecord",
    description:
      "Checks if a domain has an 'SRV' DNS record. SRV records define the location (hostname and port) of servers for specified services.",
    tags: ["dns", "SRV", "service location", "domain", "validation"],
    args: [],
    code: `
$isValid = Validator::value("example.com")->dns()->isSrvRecord();
var_dump($isValid);
`,
    result: `
true
  `,
  },
  {
    title: "isNaptrRecord",
    description:
      "Checks if a domain has a 'NAPTR' (Naming Authority Pointer) DNS record. NAPTR records are used to map services like phone numbers to domain names or define service-specific rules.",
    tags: ["dns", "NAPTR", "telephony", "mapping", "domain", "validation"],
    args: [],
    code: `
$isValid = Validator::value("example.com")->dns()->isNaptrRecord();
var_dump($isValid);
`,
    result: `
true
  `,
  },
  {
    title: "isA6Record",
    description:
      "Checks if a domain has an 'A6' DNS record. A6 records were used for IPv6 addresses but are now deprecated in favor of AAAA records.",
    tags: ["dns", "A6", "ipv6", "deprecated", "domain", "validation"],
    args: [],
    code: `
$isValid = Validator::value("example.com")->dns()->isA6Record();
var_dump($isValid);
`,
    result: `
true
  `,
  },
  {
    title: "isAnyRecord",
    description:
      "Checks if a domain has any type of DNS record. It validates whether at least one DNS record of any kind exists for the host.",
    tags: ["dns", "ANY", "any record", "domain", "validation"],
    args: [],
    code: `
$isValid = Validator::value("example.com")->dns()->isAnyRecord();
var_dump($isValid);
`,
    result: `
true
  `,
  },
  {
    title: "isAllRecord",
    description:
      "Attempts to check if a domain has all possible DNS record types (A, AAAA, CNAME, NS, SOA, etc.). Note: Not all record types may exist for every domain.",
    tags: ["dns", "ALL", "all records", "domain", "validation"],
    args: [],
    code: `
$isValid = Validator::value("example.com")->dns()->isAllRecord();
var_dump($isValid);
`,
    result: `
true
  `,
  },
  {
    title: "isCaaRecord",
    description:
      "Checks if a domain has a 'CAA' (Certification Authority Authorization) DNS record. CAA records define which certificate authorities are permitted to issue SSL/TLS certificates for the domain.",
    tags: ["dns", "CAA", "certificate authority", "domain", "validation"],
    args: [],
    code: `
$isValid = Validator::value("example.com")->dns()->isCaaRecord();
var_dump($isValid);
`,
    result: `
true
  `,
  },
  {
    title: "isPtrRecord",
    description:
      "Checks if a domain has a 'PTR' (Pointer) DNS record. PTR records are used for reverse DNS lookups, mapping IP addresses back to hostnames.",
    tags: ["dns", "PTR", "reverse DNS", "domain", "validation"],
    args: [],
    code: `
$isValid = Validator::value("example.com")->dns()->isPtrRecord();
var_dump($isValid);
`,
    result: `
true
  `,
  },
  {
    title: "isHinfoRecord",
    description:
      "Checks if a domain has an 'HINFO' (Host Information) DNS record. HINFO records describe the host’s hardware and operating system, though they are rarely used today due to security concerns.",
    tags: ["dns", "HINFO", "host info", "hardware", "domain", "validation"],
    args: [],
    code: `
$isValid = Validator::value("example.com")->dns()->isHinfoRecord();
var_dump($isValid);
`,
    result: `
true
  `,
  }
];
