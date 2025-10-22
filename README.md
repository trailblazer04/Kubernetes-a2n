- Optional - if Kind cluster is not running (or hasn’t been created yet).
# Check Existing Kind Clusters
kind get clusters

# Create a Kind Cluster
# for Default cluster
kind create cluster 

# for custom cluster
kind create cluster --config k8sconfig.yaml --name leo-cluster 

# Verify Cluster Nodes
kubectl get nodes

# Step 1: Build Docker image
docker build -t nextjs-add2num:latest .

# Step 2: Load image into Kind
kind load docker-image nextjs-add2num:latest --name leo-cluster

# Step 3: Deploy to Kubernetes
kubectl apply -f kubernetes/namespace.yaml
kubectl apply -f kubernetes/deployment.yaml
kubectl apply -f kubernetes/service.yaml


# Step 4: Verify
kubectl get all -n nextjs-add2num # to get all details 
kubectl get pods -n nextjs-add2num # just to get pods
kubectl get svc -n nextjs-add2num # just to get services 

# Step 5: Access app
kubectl port-forward -n nextjs-add2num service/nextjs-add-service 8080:80




