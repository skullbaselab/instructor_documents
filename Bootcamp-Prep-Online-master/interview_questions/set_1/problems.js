// EASY
/*------------------------------------------------------------------------------
// inAllStrings
//
// Write a function `inAllStrings(longStrings, shortString)``
// Check if a `shortString` is inside of ALL of the strings in the `longStrings` array.
// The function should return `true` if the `substring` is inside of every string
// of the `longStrings` array.
//
// Examples:
//
// inAllStrings(["thisisaverylongstring", "thisisanotherverylongstring"], "sisa") => true
// inAllStrings(["thisisaverylongstring", "thisisanotherverylongstring"], "isan") => false
// inAllStrings(["gandalf", "aragorn", "sauron"], "sam") => false
// inAllStrings(["axe", "ajax", "axl rose"], "ax") => true
------------------------------------------------------------------------------*/

// MEDIUM
/*------------------------------------------------------------------------------
// repeatedChars
//
// Write a function `repeatedChars(word) `which takes a string
// and returns an array of all the characters in word that
// appear in a streak (i.e. more than once consecutively).
// This should be case-sensitive.
//
// Examples:
// repeatedChars("aaabaa") => ["a", "a"]
// repeatedChars("mississippi") => ["s", "s", "p"]
// repeatedChars("SSassSS") => ["S", "s", "S"]
------------------------------------------------------------------------------*/

// HARD - PAIRING
/*------------------------------------------------------------------------------
// vigenereCipher
//
// Caesar's cipher takes a word and encrypts it by offsetting each letter in
// the word by a fixed number, the key. For a key of 3, for example:
// a -> d, p -> s, and y -> b
//
// Vigenere's Cipher is a Caesar cipher, but instead of a single key, a sequence
// of keys is used. For example, if we encrypt "bananasinpajamas" with the
// key sequence [1, 2, 3], the result would be "ccqbpdtkqqcmbodt":
//
// Word:   b a n a n a s i n p a j a m a s
// Keys:   1 2 3 1 2 3 1 2 3 1 2 3 1 2 3 1
// Cipher: c c q b p d t k q q c m b o d t
//
// Write a funcition `vigenereCipher(string, keySequence, alphabet)` that takes a
// string and a key-sequence, returning the encrypted word.
//
// We're giving you the alphabet as an array if you need it:
//
// var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//
// Examples:
// vigenereCipher("toerrishuman", [1], alphabet) => "upfssjtivnbo"
// vigenereCipher("toerrishuman", [1, 2], alphabet) => "uqftsktjvobp"
// vigenereCipher("toerrishuman", [1, 2, 3], alphabet) => "uqhstltjxncq"
------------------------------------------------------------------------------*/
