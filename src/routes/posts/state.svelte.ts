

export class PostState {
  value = $state(0);

  up() {
    this.value++;
  }
}
