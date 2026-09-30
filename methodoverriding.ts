class Printer {
  print(): void {
    console.log("Printing black and white text...");
  }
}

class PhotoPrinter extends Printer {
  // Overriding the print method
  print(): void {
    console.log("Printing high-quality color photo!");
  }
}

// Usage
const standardPrinter = new Printer();
standardPrinter.print(); // Output: Printing black and white text...

const colorPrinter = new PhotoPrinter();
colorPrinter.print();    // Output: Printing high-quality color photo!
