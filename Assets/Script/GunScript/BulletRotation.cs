using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BulletRotation : MonoBehaviour
{
    private void Update()
    {
        this.transform.Rotate(0, -(10000.0f * Time.deltaTime), 0);
    }
}
