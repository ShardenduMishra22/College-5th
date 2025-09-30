#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <unistd.h>

// Function to simulate packet transmission
// Returns 0 for success, 1 for collision
int transmit_packet(int packet_id, int channel_delay) {
    printf("Packet %d sent to the channel...\n", packet_id);
    sleep(channel_delay); // Simulate transmission delay
    return rand() % 2;   // Return 0 for success, 1 for collision
}

// Function to simulate a random backoff period
void backoff() {
    int backoff_time = rand() % 3 + 1; // Random delay between 1 and 3 seconds
    printf("Backing off for %d seconds...\n", backoff_time);
    sleep(backoff_time);
}

int main() {
    srand(time(NULL)); // Seed random generator for different outcomes in each run

    int num_packets, max_retry, channel_delay;

    // Take user input
    printf("Enter number of packets to send: ");
    scanf("%d", &num_packets);

    printf("Enter maximum retries per packet: ");
    scanf("%d", &max_retry);

    printf("Enter channel transmission delay (in seconds): ");
    scanf("%d", &channel_delay);

    printf("\n----- Pure ALOHA Simulation -----\n");
    printf("Packets: %d, Max Retries: %d, Channel Delay: %d sec\n\n",
           num_packets, max_retry, channel_delay);

    // Simulate packet transmission for each packet
    for (int packet_id = 1; packet_id <= num_packets; packet_id++) {
        int retry_count = 0;
        int collision;

        while (retry_count < max_retry) {
            printf("\nAttempting to send Packet %d (Attempt %d)...\n",
                   packet_id, retry_count + 1);

            // Transmit and check for collision
            collision = transmit_packet(packet_id, channel_delay);

            if (collision == 0) {
                printf("\u2714 Packet %d successfully transmitted!\n", packet_id);
                break; // Packet was successful, move to the next packet
            } else {
                printf("\u2718 Collision detected for Packet %d!\n", packet_id);
                backoff();
                retry_count++;
            }
        }

        if (retry_count == max_retry) {
            printf("! Packet %d failed after %d retries. Dropping packet.\n",
                   packet_id, max_retry);
        }
    }

    printf("\nAll packet transmissions attempted.\n");

    return 0;
}




// gcc pureALOHAprotocol.c -o pureALOHAprotocol
// ./pureALOHAprotocol