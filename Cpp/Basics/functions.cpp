#include <iostream>
using namespace std;

//inline function
// it is the request to the compiler-if accepted function
// call will be replaced with function definition. if not
// it will be like normal function
inline int max(int n1, int n2)
{
    return (n1 > n2) ? n1 : n2;
}

//global function
int sum(int, int);

//default argument
void print(int a, int b = 0)
{
    cout << "A= " << a << " B= " << b << endl;
}

int main()
{
    int num1, num2, sum;
    cout << "Enter 1st no. : ";
    cin >> num1;
    cout << "Enter 2nd no. : ";
    cin >> num2;
    cout << "Sum is : " << ::sum(num1, num2) << endl; //:: for global access

    cout << "Maximun of num1 and num2 is: " << max(num1, num2) << endl;

    print(10, 50);
    print(67);
    return 0;
}

int sum(int num1, int num2)
{
    return num1 + num2;
}