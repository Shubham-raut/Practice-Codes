#include <iostream>
using namespace std;

namespace na
{
    int num = 100;
}

namespace nb
{
    int num = 500;
}

namespace nb
{
    int num1 = 50; //acceptable
    // int num=55; //not allowed->error- same variable name

    //nested namespace
    namespace nc
    {
        int num = 55;
        int num1 = 22;
    } // namespace nc
} // namespace nb

int num = 10;

int main(void)
{
    int num = 1000;
    cout << num << "\n";     //local
    cout << ::num << '\n';   //global
    cout << na::num << "\n"; //na namespace
    cout << nb::num << "\n"; //nb namespace
    cout << nb::num1 << '\n';
    cout << nb::nc::num << '\n';
    cout << nb::nc::num1 << '\n';

    return 0;
}
