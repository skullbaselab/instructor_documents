<quiz>
  <question>
    <p>What does declaring a variable with the var keyword do in JavaScript?</p>
    <answer correct>Attaches the variable to the current scope</answer>
    <answer>Nothing, it doesn't matter if we use var or not</answer>
    <explanation>The var keyword attaches a variable to the current scope. Failing to use var may cause the variable to be part of an outer scope or the global scope</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>A variable declared (with var) within a function is accessible from global scope.</p>
    <answer>True</answer>
    <answer correct>False</answer>
    <explanation>Variables declared within a function will be part of the scope local to that function. The global scope cannot access local variables.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>A variable declared in global scope is accessible from a function.</p>
    <answer correct>True</answer>
    <answer>False</answer>
    <explanation>A local scope can access variables from the global scope.</explanation>
  </question>
</quiz>
