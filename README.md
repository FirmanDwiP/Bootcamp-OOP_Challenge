# Review Materi 

## Object Oriented Programming
OOP ini merupakan sebuah teknik atau cara di dalam pemrograman dimana segala sesuatu di pandang sebagai objek. Objek-objek ini dapat saling berinteraksi sehingga membentuk sebuah program.
- Class
Berikut ini adah contoh sederhana dalam pembuatan class dalam javascript
    ```sh
     class Halo { 
     constructor(kata) { 
     this.kata = kata;
       }
        printHalo() {
        console.log(this.kata);
         }
      }
      const ucap = new Halo("Hai");
      ucap.printHalo();
    ```
- Static Method
 Method yang sama seperti class method, tetapi untuk menjalankannya tidak perlu meng instance class, cukup menggunakan NamaClass.namaMehod()
    ```sh
    class Orang {
    constructor(nama, alamat, umur) {
    this.nama = nama;
    this.alamat = alamat;
    this.umur = umur;
    }
    static instance() {
    return new Orang("Adi", "Solo", 17);
    }
    printNama() {
    console.log(`nama ${this.nama} beralamat di ${this.alamat}`);
    }
    }
    const orang = Orang.instance();
    orang.printNama()
    ```
- Method Chaining
Method chaining merupakan salah satu konsep yang ada dalam paradigma OOP untuk mengikat / merantai method. Disini kita dapat memanggil lebih dari satu method untuk satu kali operasi dengan mengolah object yang sama. Setiap method tersebut berperan mengubah nilai property dalam object tersebut dari satu bentuk ke bentuk lainnya
    ```sh
    class ChainAble {
      firstMethod() {
        console.log('This is the First Method');
        return this;
      }
      
      secondMethod() {
        console.log('This is the Second Method');
        return this;
      }
      
      thirdMethod() {
        console.log('This is the Third Method');
        return this;
      }
    }
    
    const chainableInstance = new Chainable()
    chainableInstance
      .firstMethod()
      .secondMethod()
      .thirdMethod()
      
      // Tanpa chaining
    $object = new Class();
    $object->method_satu();
    $object->method_dua();
    $object->method_tiga();
    
    // Dengan chaining
    $object = new Class();
    $object->method_satu()->method_dua()->method_tiga();
      ```
- Encapsulation
    Encapsulation pada Javascript secara sederhana dapat dipahami dengan pengertisan kapsul obat. Dalam kapsul obat ini kita melihat kapsul obat tanpa perlu tahu di dalamnya isinya apa, yang kita butuhkan hanyalah makan kapsul tersebut dan sakit kita sembuh.

- Inheritance
    Merupakan sebuah method untuk menurunkan sifat pada class tersebut bisa berupa method dan property pada class lain.

- Polymorphism
    Mengubah suatu method dari subclass yang berbeda sengan superclass

## Design pattern
Design pattern merupakan sebuah prosedural dalam pengembangan aplikasi yang menjadi solusi dalam permasalahan secara umum. Design pattern hanya berbentuk template bukan sebuah code akhir untuk segera dieksekusi.

Jenis - jenis design pattern
1. Separation of concern
Design pattern yang membagi program dalam project menjadi bagian yang berbeda beda sehingga setiap bagian membahas masalah yang terpisah dengan bagian yang lain, contoh (Model View Controller).
 
2. Factory pattern
Design pattern pada class yang mempunyai ketergantungan dengan class lain tanpa harus diketahui cara pembuatan dari class tersebut.

3. Adapter Pattern
Design pattern yang dalam satu class mempunyai banyak karakteristik yang berbeda pada sebuah property member yang sama.

