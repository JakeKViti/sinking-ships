export function fetchLeaderboard() {
    return () => {
        fetch(`http://localhost:3000/users`, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify()
          })
            .then(res => res.json())
    };
  }