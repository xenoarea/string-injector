## Functions

<dl>
<dt><a href="#getValueByKey">getValueByKey(valuesMapSlice, key)</a> ⇒ <code>any</code></dt>
<dd><p>Gets from a given slice of the valuesMap the value at the given key</p>
</dd>
<dt><a href="#getValueByKeyPath">getValueByKeyPath(keyPath, valuesMap)</a> ⇒ <code>string</code></dt>
<dd><p>Replaces placeholders by values from given values map into given string</p>
</dd>
<dt><a href="#injectValuesToString">injectValuesToString(str, valuesMap)</a> ⇒ <code>string</code></dt>
<dd><p>Replaces placeholders by values from given values map into given string</p>
</dd>
</dl>

<a name="getValueByKey"></a>

## getValueByKey(valuesMapSlice, key) ⇒ <code>any</code>
Gets from a given slice of the valuesMap the value at the given key

**Kind**: global function  
**Returns**: <code>any</code> - - Value of the values map slice at the given key  

| Param | Type | Description |
| --- | --- | --- |
| valuesMapSlice | <code>Object</code> \| <code>Array</code> | slice of the values map |
| key | <code>string</code> | Key where to look for a value in the values map slice |

<a name="getValueByKeyPath"></a>

## getValueByKeyPath(keyPath, valuesMap) ⇒ <code>string</code>
Replaces placeholders by values from given values map into given string

**Kind**: global function  
**Returns**: <code>string</code> - - Value from valuesMap found at the given keyPath  

| Param | Type | Description |
| --- | --- | --- |
| keyPath | <code>string</code> | Dot seperated keypath of the value in valuesMap |
| valuesMap | <code>Object</code> \| <code>Array</code> | values map |

<a name="injectValuesToString"></a>

## injectValuesToString(str, valuesMap) ⇒ <code>string</code>
Replaces placeholders by values from given values map into given string

**Kind**: global function  
**Returns**: <code>string</code> - - String in which placeholders have been replaced by values  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | String in which replace placeholders |
| valuesMap | <code>Object</code> \| <code>Array</code> | values map |

