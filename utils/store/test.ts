export const testStore = defineStore("test", {
  state(): { testing: string } {
    return {
      testing: "testing",
    };
  },
});
