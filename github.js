class GitHub {
    constructor() {
        this.client_id = 'ffccc0371d28a6c6ae77';
        this.client_secret = '74ff8378d366a8f5bbdbeaf608a2a0a5c9bab48a';
         this.repos_count = 5;
         this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}