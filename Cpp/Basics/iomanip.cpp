#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    float num = 20.124;
    cout << setprecision(3) << num << endl;
    return 0;
}

int main____()
{
    int num = 20;
    cout << setw(10) << setfill('$') << num << endl;
    return 0;
}

int main___()
{
    int num = 20;
    int val = 30;
    cout << "Num = " << num << "Val = " << val << endl;
    cout << "Num = " << setw(10) << num << "Val = " << setw(10) << val << endl;   //%10d
    cout << "Num = " << setw(-10) << num << "Val = " << setw(-10) << val << endl; //not applicable
    return 0;
}

int main__()
{ //escape sequence
    cout << "\"This is PreCAt BATCH \\Online\"\n";
    return 0;
}

int main_()
{
    int num = 10;
    // cout << setbase(10) << num << '\n'; //decimal
    // cout << setbase(8) << num << '\n';  //octal
    // cout << setbase(16) << num << '\n'; //hex

    cout << num << '\n';        //decimal
    cout << oct << num << '\n'; //octal
    cout << hex << num << '\n'; //hex
    return 0;
}
