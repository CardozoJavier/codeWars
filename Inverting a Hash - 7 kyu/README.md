# Inverting a Hash

[https://www.codewars.com/kata/inverting-a-hash/train/javascript](https://www.codewars.com/kata/inverting-a-hash/train/javascript)

### Summary
Given a `Hash` made up of *keys* and *values*, invert the hash by swapping them.

### Examples
```
Given:

  { a: '1',
    b: '2',
    c: '3' }

Return:

  { 1: 'a',
    2: 'b',
    3: 'c' }



Given:

  { foo:   'bar',
    hello: 'world' }

Return:

  { bar:   'foo',
    world: 'hello' }
```
### Notes
* Keys and values may be of any type appropriate for use as a key.
* All hashes provided as input will have unique values, so the inversion is [involutive](https://en.wikipedia.org/wiki/Involution_%28mathematics%29). In other words, do not worry about identical values stored under different keys.
