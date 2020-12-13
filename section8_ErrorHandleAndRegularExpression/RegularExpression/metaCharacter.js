let re;
// Literal character
re = /hello/;
re = /hello/i;

// Metacharacter symbols
re = /^h/i; // ^ must start with
re = /d$/i; // $ must end with
re = /^hello$/i; // must start and end with
re = /^h.llo$/i; // . match any 1 character
re = /h*llo/i; // * match any character 0 or more times
re = /gre?a?y/i; // `?` optional character
re = /gre?a?y\?/i; // Escape character

// Brackets [] - Characters Sets
re = /gr[ae]y/i; // [ae] means must be a or e
re = /[GF]ray/i; // [GF] means must be G or F
re = /[^GF]ray/i; // [^GF] means must match anything except G or F
re = /[A-Z]ray/; // [A-Z] means must match uppercase letter
re = /[a-z]ray/; // [a-z] means must match lowercase letter
re = /[A-Za-z]ray/; // [A-Za-z] means must match any letter
re = /[0-9]ray/; // [0-9] means must match any digit

// Braces {} - Quantifier
// l{2} match 2l
re = /Hel{2}o/i; // {m} - Must occur exactly m amount of time
re = /Hel{2,4}o/i; //{n,m} - Must occur between n and m amount of time
re = /Hel{2,}o/i; //{m,} - Must occur at least m amount of time

// Parentheses - Grouping
re = /^([0-9]x){3}$/i; //  ([0-9]x) group digit and x like 0x, 1x

// Shorthand Character Classes
re = /\w/; // word character w - alphanumeric (can be any letter or number) or _
re = /\w+/; // + = one or more
re = /\W/; // W - anything but letter, number or _
re = /\d/; // match any digit
re = /\d+/; // match any digit 0 or more times
re = /\D/; // match non-digit
re = /\s/; // match whitespace character
re = /\S/; // match non-whitespace character
re = /Hell\b/i; // \b = word boundary match exact word hell

// Assertions
re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; // Match x only if not followed by y

// String to match
const str = "xy";
// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) console.log(`${str} matches ${re.source}`);
  else console.log(`${str} does NOT matches ${re.source}`);
}

reTest(re, str);
