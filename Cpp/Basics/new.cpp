#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    int *ptr = new int;
    *ptr = 125;
    cout << *ptr << endl;

    delete ptr; // only deleting is not enough, it still
    // have that much space
    // dangling pointer - pointer available in memory but not pointing any veriable
    ptr = NULL; // freeing that space

    int n;
    cout << "Enter how many elements you wish to enter in an array: ";
    cin >> n;
    int *ptrArr = new int[n];
    int i;
    cout << "\n Enter array elements->" << endl;
    for (i = 0; i < n; i++)
        cin >> ptrArr[i];

    cout << "\n Array elements are->" << endl;
    for (i = 0; i < n; i++)
        cout << setw(6) << ptrArr[i];
    cout << endl;

    delete[] ptrArr;
    ptrArr = NULL;

    return 0;
}