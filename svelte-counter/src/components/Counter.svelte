<script>
  let count = 0;

  function onDecrement() {
    count--;
  }
  function onIncrement() {
    count++;
  }
</script>

<div class="counter-container">
  <h1>{count}</h1>
  <div class="button-container">
    <button type="button" on:click={onDecrement}>-</button>
    <button type="button" on:click={onIncrement}>+</button>
  </div>
</div>

<style>
  .counter-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 6rem;
  }

  .button-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-width: 20rem;
  }

  button {
    padding: 1rem 2rem;
    font-size: 2rem;
    color: white;
    background-color: #4793ff;
    border: transparent;
    outline: transparent;
  }
  button:hover {
    background-color: #1f79f6;
  }
</style>
