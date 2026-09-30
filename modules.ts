// 1. Export a Type Alias Union
export type OperationMode = "QUIET" | "VERBOSE";

// 2. Export a Class
export class Calculator {
  public total: number = 0;
  public mode: OperationMode = "QUIET";

  add(num: number): void {
    this.total += num;
    if (this.mode === "VERBOSE") {
      console.log(`Added ${num}. Current total: ${this.total}`);
    }
  }
}
