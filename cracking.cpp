#include <iostream>
#include <unistd.h>
#include <termios.h>
#include <unistd.h>

#define ALPHABET "éABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 !@#$%^&*()_+=-`~|\\}{[]\"\';:/?<>,."

// Function to turn off terminal echo
void turnOffEcho() {
    struct termios newt;

    // Get current terminal attributes
    tcgetattr(STDIN_FILENO, &newt);

    // Turn off echo
    newt.c_lflag &= ~ECHO;

    // Apply new terminal attributes
    tcsetattr(STDIN_FILENO, TCSANOW, &newt);
}

// Function to turn on terminal echo
void turnOnEcho() {
    struct termios newt;

    // Get current terminal attributes
    tcgetattr(STDIN_FILENO, &newt);

    // Turn on echo
    newt.c_lflag |= ECHO;

    // Apply new terminal attributes
    tcsetattr(STDIN_FILENO, TCSANOW, &newt);
}

void	crack() {
	char letter;
	std::string pass;
	std::string generate = "";
	std::cout << "Enter a Pass : ";
	turnOffEcho();
	srand(time(0));
	if (!std::getline(std::cin, pass))
		return std::cout << "NULL is returned" << std::endl, (void)0;
	turnOnEcho();
	while (pass != generate) {
		for (int i = 0; i < pass.length() ; i++) {
			while (pass[i] != letter) {
				letter = ALPHABET[rand() % 98];
				if (letter == pass[i])
					generate += letter;
				std::cout << "Cracking Password Please Wait ... " << std::endl;
				std::cout << generate << letter << std::endl;
				usleep(20000);
				system("clear");
			}
		}
	}
	std::cout << "Your Password is : " << generate << std::endl;
}

int main() {
	crack();
}