#include <iostream>
#include <string>
using namespace std;

int main()
{
    string str = "Hello World";
    int arr[2];
    cout << str.size() << "\n";
    cout << sizeof(arr) / sizeof(arr[0]) << "\n";
    return 0;
}