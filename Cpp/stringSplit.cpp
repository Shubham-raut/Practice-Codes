// #include <iostream>
// #include <cstring>
// using namespace std;

// int main(int argc, char **argv)
// {

//     string str = "";
//     for (int i = 1; i < argc; i++)
//     {
//         str.append(string(argv[i]).append(" "));
//     }
//     cout << str << endl;

//     char str[] = "parrot,owl,sparrow,pigeon,crow";
//     char *token = strtok(str, ",");

//     while (token)
//     {
//         cout << token << endl;
//         token = strtok(NULL, ",");
//     }

//     return 0;
// }

// // Name of program mainreturn.cpp
// #include <iostream>
// #include <cstring>
// #include <string>
// using namespace std;

// int main(int argc, char **argv)
// {

//     string commandLineStr = "";
//     for (int i = 1; i < argc; i++)
//     {
//         commandLineStr.append(string(argv[i]).append(" "));
//     }
//     cout << commandLineStr << endl;
//     char *st;
//     strcpy(st, commandLineStr);
//     // char *st = "";
//     // for (int i = 1; i < argc; i++)
//     // {
//     //     st.append(string(argv[i]).append(" "));
//     // }
//     // cout << st << endl;

//     cout << "You have entered " << argc
//          << " arguments:"
//          << "\n";

//     for (int i = 0; i < argc; ++i)
//         cout << argv[i] << "\n";

//     return 0;
// }

#include <iostream>
#include <cstring>

using namespace std;

int main(int argc, char *argv[])
{
    // char chararray[5][30]; // 5 strings, 30 char each

    // for (int i = 0; i < argc; i++)
    // {
    //     strcpy(chararray[i], argv[i + 1]);
    // }

    // char str[200];
    // int count = 0;
    // for (int i = 0; i < argc; i++)
    // {
    //     for (int j = 0; j < sizeof(argv[i + 1]) / sizeof(argv[i + 1][0]); j++)
    //     {
    //         strcpy(str[count], argv[i + 1][j]);
    //         count += 1;
    //     }
    // }

    char a[100];
    int count = 0;

    char b[][20] = {"aberh", "qehr", "q4h5qh"};

    // cout << sizeof(argv[1]) << endl;
    int j;
    for (int i = 0; i < argc; i++)
    {
        for (j = 0;; j++)
        {
            if (argv[i][j] == '\0')
            {
                break;
            }
            cout << argv[i][j];
            a[count] = argv[i][j];
            count++;
        }

        if (argv[i][j] == '\0')
        {
            break;
        }

        cout << "....";
        a[count] = ' ';
        count++;
    }
    cout << "\nhi\n";

    for (int i = 0;; i++)
    {
        if (a[i] == '\0')
        {
            break;
        }
        cout << a[i];
    }

    return 0;
}
