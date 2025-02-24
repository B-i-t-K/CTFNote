# CTFNote
## Introduction
CTFNote is a collaborative tool aiming to help CTF teams to organise their work.

[![Screenshot of the task list](screenshots/task_small.webp)](screenshots/task.png)


## Installation
If you are new to CTFNote, you can start it with `docker-compose`. The default
configuration makes it super easy to start a new instance!

```shell
$ docker-compose up -d
```

The instance will spawn a web server on port 80. The first account created will
have administrative privileges.

If you already have an instance of CTFNote in a previous version and wish to
upgrade, you should follow the guide at [MIGRATION.md](MIGRATION.md).


## Privileges
When other players register on your CTFNote instance, they will not be able to
see CTF or tasks. This is because CTFNote uses different roles to restrict CTF

You can manage other players' roles in the *Users* tab of the *Admin* panel.

Additionally, you can generate a secret that lets users create an account with a
different privilege in the *Registration with password* menu in the *Admin*
panel.

![Screenshot of the Registration with password menu](screenshots/reg_password.png)

### Guest
Guest is the default role. This role is meant to be used for guests and friends
helping sporadically on CTF.

You can add a guest to a CTF by ticking their badge in the *Guests* tab on a
specific CTF.

![Screenshot of the guest menu](screenshots/guests.png)

### Member
Member is a role that represents a team member. A certain level of trust is
given to these users: they can see every CTF, future, current and past. They can
also invite guests to CTF.

### Manager
Manager is a role that represents a team captain. They can create, import,
modify and delete CTF.

They can import CTF directly from [CTFtime](https://ctftime.org).

![Screenshot of the Import CTF feature](screenshots/import.png)

### Admin
Admin is a role with every privileges. They have access to the *Admin* panel
that lets them delete accounts, change permissions, reset passwords, create
one-time secrets and, most importantly, change the theme colours.

![Screenshot of the theme menu](screenshots/theme.png)


## Configuration
The configuration can be changed in the `.env` file. This file contains
environment variables for the containers.

The value of every variables are explained in this file.


## Screenshots
### List of the CTF
[![Screenshot of the CTF page](screenshots/ctf_small.webp)](screenshots/ctf.png)

### Calendar
[![Screenshot of the CTF calendar](screenshots/calendar_small.webp)](screenshots/calendar.png)

### Information of a single CTF
[![Screenshot of the CTF info](screenshots/info_small.webp)](screenshots/info.png)

### Task list for a CTF
[![Screenshot of the task list](screenshots/task_small.webp)](screenshots/task.png)

### Shared notepad for a task
[![Screenshot of pad](screenshots/pad_small.webp)](screenshots/pad.png)
