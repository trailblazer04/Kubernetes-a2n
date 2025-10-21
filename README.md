# Step 1: Build Docker image
docker build -t nextjs-add2num:latest .

- Optional - if Kind cluster is not running (or hasn’t been created yet).
# Check Existing Kind Clusters
kind get clusters

# Create a Kind Cluster
kind create cluster

# Verify Cluster Nodes
kubectl get nodes

# Step 2: Load image into Kind
kind load docker-image nextjs-add2num:latest

# Step 3: Deploy to Kubernetes
kubectl apply -f kubernetes/deployment.yaml
kubectl apply -f kubernetes/service.yaml
kubectl apply -f kubernetes/namespace.yaml

# Step 4: Verify
kubectl get pods
kubectl get svc

# Step 5: Access app
kubectl port-forward service/nextjs-add-service 8080:80