## Modules

<dl>
<dt><a href="#module_boo">boo</a></dt>
<dd><p>boo module.
Does some example math functions..</p>
</dd>
<dt><a href="#module_foo">foo</a></dt>
<dd><p>foo module.
???</p>
</dd>
<dt><a href="#module_myModule">myModule</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#test">test(num)</a></dt>
<dd><p>Tests a bunch of boo and foo functions using number parameter
and outputs results to console.</p>
</dd>
</dl>

<a name="module_boo"></a>

## boo
boo module.Does some example math functions..

**See**: module:foo  

* [boo](#module_boo)
    * _static_
        * [.addOne(x)](#module_boo.addOne) ⇒ <code>number</code>
    * _inner_
        * [~subtractOne(x)](#module_boo..subtractOne) ⇒ <code>number</code>
        * [~setXto3()](#module_boo..setXto3)

<a name="module_boo.addOne"></a>

### boo.addOne(x) ⇒ <code>number</code>
Add 1 to x.

**Kind**: static method of [<code>boo</code>](#module_boo)  
**Returns**: <code>number</code> - That number, plus one.  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | Any number. |

<a name="module_boo..subtractOne"></a>

### boo~subtractOne(x) ⇒ <code>number</code>
Subtract 1 from x

**Kind**: inner method of [<code>boo</code>](#module_boo)  
**Returns**: <code>number</code> - That number, minus one.  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | Any number. |

<a name="module_boo..setXto3"></a>

### boo~setXto3()
Set x property of module to 3.

**Kind**: inner method of [<code>boo</code>](#module_boo)  
<a name="module_foo"></a>

## foo
foo module.???

<a name="module_myModule"></a>

## myModule

* [myModule](#module_myModule)
    * [~foo](#module_myModule..foo)
    * [~bar()](#module_myModule..bar)

<a name="module_myModule..foo"></a>

### myModule~foo
will be module:myModule~foo

**Kind**: inner property of [<code>myModule</code>](#module_myModule)  
<a name="module_myModule..bar"></a>

### myModule~bar()
will be module:myModule.bar

**Kind**: inner method of [<code>myModule</code>](#module_myModule)  
<a name="test"></a>

## test(num)
Tests a bunch of boo and foo functions using number parameterand outputs results to console.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>number</code> | number sent to various foo/boo functions. |

