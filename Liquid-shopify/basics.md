---
title: Liquid basics
description: >-
  The basic concepts that you need to effectively interact with Liquid tags,
  filters, and objects.
api_name: liquid
source_url:
  html: 'https://shopify.dev/docs/api/liquid/basics'
  md: 'https://shopify.dev/docs/api/liquid/basics.md'
---

# Basics

The following are basic concepts that you need to effectively interact with Liquid tags, filters, and objects.

## Object handles

Objects that represent store resources, such as products, collections, articles, and blogs, have handles for identifying an individual resource. The handle is used to build the URL for the resource, or to return properties for the resource.

Other objects like `linklists`, `links`, and `settings` also have handles.

### Creating and modifying handles

Handles are automatically generated based on the resource title. They follow a set of rules:

* Handles are always lowercase
* Whitespace and special characters are replaced with a hyphen `-`.
* If there are multiple consecutive whitespace or special characters, then they're replaced with a single hyphen.
* Whitespace or special characters at the beginning are removed.

Handles need to be unique, so if a duplicate title is used, then the handle is auto-incremented by one. For example, if you had two products called `Potion`, then their handles would be `potion` and `potion-1`.

After a resource has been created, changing the resource title doesn't update the handle.

You can modify a resource's handle within the Shopify admin. This can be done either in the Handle or the Edit website SEO sections, depending on the resource. If you reference resources by their handle, then be sure to update those references when modifying handles.

***

Note

Individual links from `linklists` have handles based on their titles. These handles can't be modified directly. Individual settings, from `settings_schema.json`, sections, or blocks, get their handle from their `id` property.

***

##### Code

```liquid
{{ product.title | handle }}
```

##### Data

```json
{
  "product": {
    "title": "Health potion"
  }
}
```

##### Output

```html
health-potion
```

### Referencing handles

All objects that have a handle have a `handle` property. For example, you can output a product's handle with `product.handle`. You can reference an object, from within its parent object, by its handle in two ways:

* Square bracket notation `[ ]`: Accepts a handle wrapped in quotes `'`, a Liquid variable, or an object reference.
* Dot notation `.`: Accepts a handle without quotes.

***

Note

Referencing an object by its handle is similar to [referencing array elements by their index](https://shopify.dev/docs/api/liquid/basics#array).

***

##### Code

```liquid
'About us' page URL: {{ pages['about-us'].url }}
Enable product suggestions: {{ settings.predictive_search_enabled }}
```

##### Data

```json
{
  "settings": {
    "predictive_search_enabled": true
  }
}
```

##### Output

```html
'About us' page URL: /pages/about-us
Enable product suggestions: true
```

***

## Logical and comparison operators

Liquid supports basic logical and comparison operators for use with conditional tags: [`case`](https://shopify.dev/docs/api/liquid/tags/case), [`else`](https://shopify.dev/docs/api/liquid/tags/conditional-else), [`if`](https://shopify.dev/docs/api/liquid/tags/if) and [`unless`](https://shopify.dev/docs/api/liquid/tags/unless).

| Operator | Function |
| - | - |
| `==` | equals |
| `!=` | does not equal |
| `>` | greater than |
| `<` | less than |
| `>=` | greater than or equal to |
| `>=` | greater than or equal to |
| `<=` | less than or equal to |
| `or` | Condition A or Condition B |
| `and` | Condition A and Condition B |
| `contains` | Checks for strings in strings or arrays |

#### contains

You can use `contains` to check for the presence of a string within an array, or another string. You can’t use `contains` to check for an object in an array of objects.

##### Code

```liquid
{% if product.tags contains 'healing' %}
  This potion contains restorative properties.
{% endif %}
```

##### Data

```json
{
  "product": {
    "tags": [
      "healing"
    ]
  }
}
```

##### Output

```html
This potion contains restorative properties.
```

### Order of operations

When using more than one operator in a tag, the operators are evaluated from right to left, and you can’t change this order.

***

Caution

Parentheses `()` aren’t valid characters within Liquid tags. If you try to include them to group operators, then your tag won’t be rendered.

***

##### Code

```liquid
{% unless true and false and false or true %}
  This evaluates to false, since Liquid checks tags like this:

  true and (false and (false or true))
  true and (false and true)
  true and false
  false
{% endunless %}
```

##### Output

```html
This evaluates to false, since Liquid checks tags like this:

  true and (false and (false or true))
  true and (false and true)
  true and false
  false
```

***

## Types

Liquid output can be one of six data types.

### string

Any series of characters, wrapped in single or double quotes.

***

Info

You can check whether a string is empty with the `blank` object.

***

### number

Numeric values, including floats and integers.

### boolean

A binary value, either `true` or `false`.

### nil

An undefined value.

Tags or outputs that return `nil` don't print anything to the page. They are also treated as `false`.

***

Note

A string with the characters “nil” is not treated the same as `nil`.

***

### array

A list of variables of any type.

To access all of the items in an array, you can loop through each item in the array using a [`for`](https://shopify.dev/docs/api/liquid/tags/for) or [`tablerow`](https://shopify.dev/docs/api/liquid/tags/tablerow) tag.

You can use square bracket `[ ]` notation to access a specific item in an array. Array indexing starts at zero.

You can’t initialize arrays using only Liquid. You can, however, use the split filter to break a single string into an array of substrings.

### empty

An `empty` object is returned if you try to access an object that is defined, but has no value. For example a page or product that’s been deleted, or a setting with no value.

You can compare an object with `empty` to check whether an object exists before you access any of its attributes.

##### Code

```liquid
{% unless pages.about-us == empty %}
  <h1>{{ page.title }}</h1>
  <div>
    {{ page.content }}
  </div>
{% endunless %}
```

##### Data

```json
{
  "page": {
    "content": "<p>Polina's Potent Potions was started by Polina in 1654.</p>\n<p>We use all-natural locally sourced ingredients for our potions.</p>",
    "title": "About us"
  }
}
```

##### Output

```html
<h1>About us</h1>
  <div>
    <p>Polina's Potent Potions was started by Polina in 1654.</p>
<p>We use all-natural locally sourced ingredients for our potions.</p>
  </div>
```

***

## Truthy and falsy

All data types must return either `true` or `false`. Those which return `true` by default are called truthy. Those that return `false` by default are called falsy.

| Value | Truthy | Falsy |
| - | - | - |
| `true` | | |
| `false` | | |
| `nil` | | |
| `empty string` | | |
| `0` | | |
| `integer` | | |
| `float` | | |
| `array` | | |
| `empty array` | | |
| `page` | | |
| `empty object` | | |

### Example

Because `nil` and `false` are the only falsy values, you need to be careful how you check values in Liquid. A value might not be in the format you expect, but still be truthy.

For example, empty strings are truthy, so you need to check whether they’re empty with `blank`. `EmptyDrop` objects are also truthy, so you need to check whether the object you’re referencing is `empty`.

##### Code

```liquid
{% if settings.featured_potions_title != blank -%}
  {{ settings.featured_potions_title }}
{%- else -%}
  No value for this setting has been selected.
{%- endif %}
{% unless pages.recipes == empty -%}
  {{ pages.recipes.content }}
{%- else -%}
  No page with this handle exists.
{%- endunless %}
```

##### Data

```json
{
  "settings": {
    "featured_potions_title": null
  }
}
```

##### Output

```html
No value for this setting has been selected.
No page with this handle exists.
```

***

## Whitespace control

Even if it doesn't output text, any line of Liquid outputs a line in your rendered content. By including hyphens in your Liquid tag, you can strip any whitespace that your Liquid generates when rendered.

If you want to remove whitespace on only one side of the Liquid tag, then you can include the hyphen on either the opening or closing tag.

##### Code

```liquid
{%- if collection.products.size > 0 -%}
The '{{ collection.title }}' collection contains the following types of products:

{% for type in collection.all_types -%}
  {% unless type == blank -%}
    - {{ type }}
  {%- endunless -%}
{%- endfor %}
{%- endif -%}
```

##### Data

```json
{
  "collection": {
    "all_types": [
      "Health",
      "Health & Beauty",
      "Invisibility",
      "Water"
    ],
    "products": [],
    "title": "Sale potions"
  }
}
```

##### Output

```html
The 'Sale potions' collection contains the following types of products:

- Health
- Health & Beauty
- Invisibility
- Water
```

***