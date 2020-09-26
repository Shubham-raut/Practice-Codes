#include <iostream>
using namespace std;

int main()
{
    int a = 100;
    int &r = a; //reference variable - alise name for given veriable

    typedef int number;
    number n = 7;
    cout << n << endl;

    cout << "A= " << a << " &A= " << &a << endl;
    cout << "R= " << r << " &R= " << &r << endl;

    a++;
    cout << "\nAfter modifing A\n";
    cout << "A= " << a << " &A= " << &a << endl;
    cout << "R= " << r << " &R= " << &r << endl;

    r++;
    cout << "\nAfter modifing R\n";
    cout << "A= " << a << " &A= " << &a << endl;
    cout << "R= " << r << " &R= " << &r << endl;

    return 0;
}