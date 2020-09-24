#include <iostream>
using namespace std;

class Complex
{
private:
    int real, imag; //data members

public:
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

int main()
{
    Complex obj;
    obj.accept();
    obj.display();
    obj.hi();
    cout << "Size of class= " << sizeof(obj) << endl; //size of object of class
    return 0;
}