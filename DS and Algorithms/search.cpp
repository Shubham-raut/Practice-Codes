#include <iostream>
using namespace std;

int binarySearch(int *arr, int num, int end, int start = 0)
{
    if (end >= start)
    {
        int mid = start + (end - start) / 2;
        if (arr[mid] == num)
            return mid;

        if (arr[mid] > num)
            return binarySearch(arr, num, mid - 1, start);

        return binarySearch(arr, num, end, mid + 1);
    }
    return -1;
}

int searchZero(int *arr, int end, int start = 0)
{
    if (end >= start)
    {
        int mid = start + (end - start) / 2;
        if ((arr[mid] == 0) && (mid == 0 || arr[mid - 1] == 1))
            return mid;

        if (arr[mid] == 1)
            return searchZero(arr, end, mid + 1);

        return searchZero(arr, mid - 1, start);
    }
    return -1;
}

int main()
{
    // int arr[] = {2, 4, 6, 7};
    // int num = 4;
    // cout << binarySearch(arr, num, sizeof(arr) / sizeof(arr[0])) << endl;

    int arr1[] = {1, 1, 1, 1, 0, 0, 0, 0, 0, 0};
    int size = sizeof(arr1) / sizeof(arr1[0]);
    int val = searchZero(arr1, size);
    int zeros = (val != -1) ? size - val : val;
    cout << zeros << endl;

    return 0;
}