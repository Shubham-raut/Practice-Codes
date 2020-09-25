#include <iostream>
using namespace std;

class Demo
{
private:
    int num;
    // const int c=58; //allowed
    const int c;
    mutable int m;

public:
    Demo() : num(30), c(50), m(40) {} //allowed

    //allowed
    Demo() : c(50)
    {
        this->num = 36;
        this->m = 57;
    }

    // Demo(){
    //     this->c79; //not allowed
    // }

    void disp() const
    {
        cout << "Num: " << this->num << endl;
        cout << "C: " << this->c << endl;

        // this->num++; //not allowed in const function
        // this->c++; //now allowed

        // every property become const inside const function

        m++; // mutable variable
        cout << "M: " << this->m << endl;
    }
};

int main()
{
    // const int a;
    // a = 5;  //not allowed

    const int a = 5;

    Demo tobj;
    tobj.disp();
    return 0;
}