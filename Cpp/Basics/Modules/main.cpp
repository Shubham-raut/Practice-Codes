#include <iostream>
using namespace std;

#include "./emp.h"

int main()
{
    cout << "In Main\n";
    Employee eobj;
    eobj.disp();
    eobj.accept();
    eobj.disp();

    // Employee eobj2(20, 30000);
    // eobj2.disp();
    return 0;
}
