#include <iostream>
using namespace std;

//global function
int sum(int, int);

int main()
{
    int num1, num2, sum;
    cout << "Enter 1st no. : ";
    cin >> num1;
    cout << "Enter 2nd no. : ";
    cin >> num2;
    cout << "Sum is : " << ::sum(num1, num2) << endl; //:: for global access
    return 0;
}

int sum(int num1, int num2)
{
    return num1 + num2;
}