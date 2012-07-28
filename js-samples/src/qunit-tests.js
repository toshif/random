// reference : http://api.qunitjs.com/

// test( title: String[, expected: Number ], test: Function(assert: QUnit.assert) )

// ok : A boolean assertion, equivalent to CommonJSÅfs assert.ok() and JUnitÅfs assertTrue(). Passes if the first argument is truthy.

// equal : A comparison assertion, equivalent to JUnit/CommonJS assertEqual(s).

test("hello test", function() {
	ok(1 == "1", "Passed nice!");
});

test("hello test equal 2", function() {
	equal(1, "1");
	equal(1, "1", "good matched");
	equal(2, "2", "good matched twice");
	equal("aaa", "aaa");
});

