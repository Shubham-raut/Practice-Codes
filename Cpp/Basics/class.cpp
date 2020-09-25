#include <iostream>
using namespace std;

class Complex
{
private:
    int real, imag; //data members

public:
    //constructor member initializer list
    Complex() : real(10), imag(20) {}

    // Complex() //constructor (parameterless /default)
    // {
    //     cout << "\nParameterless constructor\n";
    //     real = 1;
    //     imag = 1;
    // }

    Complex(int n1, int n2) //constructor (paramaterized )
    {
        cout << "\ntwo parameter constructor\n";
        real = n1;
        imag = n2;
    }

    Complex(char a);

    Complex(int real, int imag, char c)
    {
        cout << "\ntwo parameter constructor\n";
        this->real = real;
        this->imag = imag;
    }

    ~Complex()
    {
        cout << "Destructor Called" << this << endl;
    }

    void accept() //method | member function
    {
        cout << "Enter real Val: ";
        cin >> real;
        cout << "Enter imag Val: ";
        cin >> imag;
    }

    void display()
    {
        cout << "Real= " << real << endl;
        cout << "Imag= " << imag << endl;
    }

    void hi();
};

//outside class definition
void Complex::hi()
{
    cout << "Hi\n";
}

Complex::Complex(char a)
{
    cout << "\nOutside Class definition\n";
    cout << "A= " << a << endl;
}

int main()
{
    Complex obj; //constructor gets called
    obj.display();
    // obj.accept();
    // obj.display();
    // obj.hi();
    // cout << "Size of class= " << sizeof(obj) << endl; //size of object of class

    // Complex obj1(2, 6);
    // obj1.display();

    // Complex obj2('S');

    // Complex obj3(5, 55, 'A');
    // obj3.display();
    return 0;
}